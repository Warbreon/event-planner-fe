import {ChangeEvent, useEffect, useState} from 'react';
import {User} from '../../models/User';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, StoreState} from '../../redux/store/Store';
import {add, removeAll} from '../../redux/slices/CreateEventPageSlice';
import {areArraysEqual} from '../../utils/CompareArrays';
import {fetchUsers} from '../../redux/slices/UserSlice';
import {BUTTON_LABELS} from "../../themes/styles/Button";

interface Props {
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const useAddGuestsVM = ({ setFieldValue }: Props) => {

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
}, [dispatch]);

 const {list: users, error, isLoading} = useSelector((state: any) => state.users);


	const [showForm, setShowForm] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentlySelectedUsers, setCurrentlySelectedUsers] = useState<User[]>([]);
	const [showError, setShowError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [confirmButtonLabel, setConfirmButtonLabel] = useState<BUTTON_LABELS>(BUTTON_LABELS.ADD_GUESTS);
	const newUserSelection = useSelector((state: StoreState) => state.createEventGuests);

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
		return currentUserSelection.map((user) => user.id);
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
		setFieldValue('attendeeIds', userIDs);
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
		users,
		error, 
		isLoading,
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
