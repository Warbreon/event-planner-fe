import { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../models/User';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { useDispatch } from 'react-redux';
import { add, removeAll } from '../../redux/slices/CreateEventPageSlice';

interface Props {
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const useAddGuestsVM = ({setFieldValue}: Props) => {
	const [showForm, setShowForm] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [currentlySelectedUsers, setCurrentlySelectedUsers] = useState<User[]>([]);
	const newUserSelection = useSelector((state: StoreState) => state.createEventGuests);
	const dispatch = useDispatch();

	const onToggle = (event: ChangeEvent<HTMLInputElement>) => {
		setShowForm(event.target.checked);
	};

	const onModalOpen = () => {
		if (currentlySelectedUsers.length > 0) {
			currentlySelectedUsers.forEach((user) => dispatch(add(user)));
		}
		setShowModal(!showModal);
	};

	const onModalClose = () => {
		setShowModal(!showModal);
		dispatch(removeAll());
	};

	const convertUserIds = (currentUserSelection: User[]) => {
		const usersIds: number[] = currentUserSelection.map(user => user.id);
		return usersIds;
	}

	const onConfirm = () => {
		const sortedNewlySelectedUsers = [...newUserSelection].sort();
		const sortedCurrentlySelectedUsers = [...currentlySelectedUsers].sort();
		const areArraysEqual =
			sortedNewlySelectedUsers.length === sortedCurrentlySelectedUsers.length &&
			sortedNewlySelectedUsers.every((value, index) => value === sortedCurrentlySelectedUsers[index]);

		if (!areArraysEqual) {
			setCurrentlySelectedUsers(newUserSelection);
			onModalClose();
		} else {
			return;
		}
	};

	const onDeleteClick = (userId: number) => {
		setCurrentlySelectedUsers(currentlySelectedUsers.filter((x) => x.id !== userId));
	};

	useEffect(()=> {
		const userIDs = convertUserIds(currentlySelectedUsers);
		setFieldValue('attendees', userIDs);
	}, [currentlySelectedUsers, setFieldValue]);

	return {
		showForm,
		showModal,
		currentlySelectedUsers,
		onToggle,
		onModalOpen,
		onModalClose,
		onConfirm,
		onDeleteClick
	};
};

export default useAddGuestsVM;
