import { useEffect, useState } from "react";
import { REGISTRATION_STATUS } from "../../../models/RegistrationStatus";
import useRegistration from "../../../hooks/UseRegistration";
import { StoreState } from "../../../redux/store/Store";
import { useSelector } from "react-redux";
import EventRestrictionsService from "../../../services/EventRestrictionsService";
import { Event } from "../../../models/Event";

interface Props {
    event: Event;
}

const EventRegistrationControlVM = ({ event }: Props) => {
    const currentUserEmail = useSelector((state: StoreState) => state.user.email);
    const isCurrentUserCreator = currentUserEmail === event.creatorEmail;

    const [isSnackbarOpen, setSnackbarOpen] = useState(false);
    const [error, setError] = useState('');
    const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

    const handleConfirmationDialogClose = () => setConfirmationDialogOpen(false);
    const handleConfirmationDialogConfirm = () => {
        unregister();
        handleConfirmationDialogClose();
    };
    

    const {
        isModalOpen,
        isLoading: isRegistrationLoading,
        error: registrationError,
        registrationStatus,
        register,
        unregister,
        closeModal,
    } = useRegistration({
        eventId: event.id,
        initialRegistrationStatus: event.currentUserRegistrationStatus ?? null,
        isOpenEvent: event.isOpen,
        isCreator: isCurrentUserCreator,
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

    const handleSnackbarClose = () => setSnackbarOpen(false);

    const restrictionMessage = EventRestrictionsService.getRestrictionMessage({ event, isCurrentUserCreator });

    const canShowRestriction = restrictionMessage
        && registrationStatus !== REGISTRATION_STATUS.ACCEPTED
        && registrationStatus !== REGISTRATION_STATUS.PENDING;

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
        isCurrentUserCreator,
        canShowRestriction,
        restrictionMessage,
    }
}

export default EventRegistrationControlVM