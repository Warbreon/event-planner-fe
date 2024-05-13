import { useEffect, useState } from "react";
import { REGISTRATION_STATUS } from "../../../models/RegistrationStatus";
import useRegistration from "../../../hooks/UseRegistration";
import { StoreState } from "../../../redux/store/Store";
import { useSelector } from "react-redux";

interface Props {
    eventId: number;
    initialRegistrationStatus: REGISTRATION_STATUS | null;
    isOpenEvent: boolean;
    creatorEmail: string;
}

const EventRegistrationControlVM = ({ eventId, initialRegistrationStatus, isOpenEvent, creatorEmail }: Props) => {
    const currentUserEmail = useSelector((state: StoreState) => state.user.email);
    const [isSnackbarOpen, setSnackbarOpen] = useState(false);
    const [error, setError] = useState('');
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
    const handleConfirmationDialogClose = () => setConfirmationDialogOpen(false);
    const handleConfirmationDialogConfirm = () => {
        unregister();
        handleConfirmationDialogClose();
    };
    const isCreator = currentUserEmail === creatorEmail;

    const {
		isModalOpen,
		isLoading: isRegistrationLoading,
		error: registrationError,
		registrationStatus,
		register,
		unregister,
		closeModal,
	} = useRegistration({
		eventId: Number(eventId),
		initialRegistrationStatus: initialRegistrationStatus ?? null,
		isOpenEvent: Boolean(isOpenEvent),
        isCreator: Boolean(isCreator),
	});

    useEffect(() => {
		if (registrationError) {
            setError(registrationError);
			setSnackbarOpen(true);
		}
	}, [registrationError, setSnackbarOpen]);

    const onEventRegistrationClick = () => {
        if (registrationStatus === REGISTRATION_STATUS.PENDING) {
            setError('You have already sent registration request to this event');
            setSnackbarOpen(true);
            return;
        }

        registrationStatus === REGISTRATION_STATUS.ACCEPTED ? onEventRegistrationCancelClick() : register();
    }

    const onEventRegistrationCancelClick = () => setConfirmationDialogOpen(true);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return {
        onEventRegistrationClick,
        registrationError: error,
        isModalOpen,
        closeModal,
        registrationStatus,
        isRegistrationLoading,
        isSnackbarOpen,
        handleSnackbarClose,
        onEventRegistrationCancelClick,
        isConfirmationDialogOpen,
        handleConfirmationDialogConfirm,
        handleConfirmationDialogClose,
        isCreator,
    }
}

export default EventRegistrationControlVM