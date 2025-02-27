import { ChangeEvent, useEffect, useState } from 'react';
import { User } from '../../models/User';
import { AppDispatch, StoreState } from '../../redux/store/Store';
import { add, removeAll } from '../../redux/slices/CreateEventPageSlice';
import { areArraysEqual } from '../../utils/CompareArrays';
import { removeAllFetchedAttendees } from '../../redux/slices/EditEventSlice';
import { fetchUsers } from '../../redux/slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import {BUTTON_LABELS} from "../../themes/styles/Button";

interface Props {
	setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

const useAddGuestsVM = ({ setFieldValue }: Props) => {

	const newUserSelection = useSelector((state: StoreState) => state.createEventGuests);
	const registeredAttendees = useSelector((state: StoreState) => state.editEventGuests);
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
}, [dispatch]);

 const {list: users, error, isLoading} = useSelector((state: any) => state.users);


	const [showForm, setShowForm] = useState<boolean>(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentlySelectedUsers, setCurrentlySelectedUsers] = useState<User[]>([]);
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [confirmButtonLabel, setConfirmButtonLabel] = useState<BUTTON_LABELS>(BUTTON_LABELS.ADD_GUESTS);
	const [isSnackbarOpen, setSnackbarOpen] = useState(false);

	useEffect(() => {
		if(registeredAttendees.length > 0) {
			setShowForm(true);
			setCurrentlySelectedUsers(registeredAttendees)
			dispatch(removeAllFetchedAttendees());
		}
	}, [dispatch, registeredAttendees])

	const onToggle = (event: ChangeEvent<HTMLInputElement>) => {
		setShowForm(event.target.checked);
	};

	const onModalOpen = () => {
		dispatch(removeAll());
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
		setError('');

		if (currentlySelectedUsers.length === 0 && newUserSelection.length === 0) {
			setError('Select employees you would like to invite to this event!');
			return;
		}

		if (!areArraysEqual(newUserSelection, currentlySelectedUsers)) {
			setCurrentlySelectedUsers(newUserSelection);
			onModalClose();
		} else {
			setError('Selected employees are already added to the guest list!');
		}
	};

	const setError = (message: string) => {
		setErrorMessage(message);

		if (message) {
			setSnackbarOpen(true);
		}
	};

	useEffect(() => {
		const userIDs = convertUserIds(currentlySelectedUsers);
		setFieldValue('attendeeIds', userIDs);
	}, [currentlySelectedUsers, setFieldValue]);

	const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

	useEffect(() => {
		setError('');
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
		errorMessage,
		confirmButtonLabel,
		onToggle,
		onModalOpen,
		onModalClose,
		onConfirm,
		onDeleteClick,
		isSnackbarOpen,
		handleSnackbarClose,
	};
};

export default useAddGuestsVM;
