import { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../models/User';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { useDispatch } from 'react-redux';
import { add, removeAll } from '../../redux/slices/CreateEventPageSlice';
import { areArraysEqual } from '../../utils/CompareArrays';

interface Props {
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const enum BUTTON_LABELS {
	ADD_GUESTS = 'Add guests',
	SAVE_CHANGES = 'Save changes',
}

const useAddGuestsVM = ({ setFieldValue }: Props) => {
	const [showForm, setShowForm] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentlySelectedUsers, setCurrentlySelectedUsers] = useState<User[]>([]);
	const [showError, setShowError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [confirmButtonLabel, setConfirmButtonLabel] = useState<BUTTON_LABELS>(BUTTON_LABELS.ADD_GUESTS);
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
		const usersIds: number[] = currentUserSelection.map((user) => user.id);
		return usersIds;
	};

	const onDeleteClick = (userId: number) => {
		setCurrentlySelectedUsers(currentlySelectedUsers.filter((x) => x.id !== userId));
	};

	const onConfirm = () => {
		setError(false, '');

		if (currentlySelectedUsers.length === 0 && newUserSelection.length === 0) {
			setError(true, 'Select employees you would like to invite to this event!');
			return;
		}

		if (!areArraysEqual(newUserSelection, currentlySelectedUsers)) {
			setCurrentlySelectedUsers(newUserSelection);
			onModalClose();
		} else {
			setError(true, 'Selected employees are already added to the guest list!');
		}
	};

	const setError = (error: boolean, message: string) => {
		setShowError(error);
		setErrorMessage(message);
	};

	useEffect(() => {
		const userIDs = convertUserIds(currentlySelectedUsers);
		setFieldValue('attendees', userIDs);
	}, [currentlySelectedUsers, setFieldValue]);

	useEffect(() => {
		setError(false, '');
		if (
			currentlySelectedUsers.length > newUserSelection.length ||
			areArraysEqual(newUserSelection, currentlySelectedUsers)
		) {
			setConfirmButtonLabel(BUTTON_LABELS.SAVE_CHANGES);
		} else {
			setConfirmButtonLabel(BUTTON_LABELS.ADD_GUESTS);
		}
	}, [currentlySelectedUsers, currentlySelectedUsers.length, newUserSelection]);

	return {
		showForm,
		showModal,
		currentlySelectedUsers,
		showError,
		errorMessage,
		confirmButtonLabel,
		onToggle,
		onModalOpen,
		onModalClose,
		onConfirm,
		onDeleteClick,
	};
};

export default useAddGuestsVM;
