import { useEffect, useState } from "react";
import { REGISTRATION_STATUS } from "../../../models/RegistrationStatus";
import useRegistration from "../../../hooks/UseRegistration";
import { StoreState } from "../../../redux/store/Store";
import { useSelector } from "react-redux";
import EventRestrictionsService from "../../../services/EventRestrictionsService";
import { Event } from "../../../models/Event";
import { useNavigate } from "react-router";
import ROUTES from "../../../routes/Routes";
import { PAYMENT_STATUS } from "../../../models/PaymentStatus";

interface Props {
    event: Event;
}

const EventRegistrationControlVM = ({ event }: Props) => {
    const navigate = useNavigate();
    const currentUserId = useSelector((state: StoreState) => state.userInfo.userId);
    const isCurrentUserCreator = event && event.creatorId ? currentUserId === event.creatorId : false;

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
        paymentStatus,
        register,
        unregister,
        closeModal
    } = useRegistration({
        event: event,
        isCreator: isCurrentUserCreator,
    });

    useEffect(() => {
        if (registrationError) {
            setError(registrationError);
            setSnackbarOpen(true);
        }
    }, [registrationError, setSnackbarOpen]);

    const onEventRegistrationClick = () => {
        if (registrationStatus === REGISTRATION_STATUS.PENDING || registrationStatus === REGISTRATION_STATUS.REJECTED) {
            return;
        }

        if (event.price > 0 && paymentStatus !== PAYMENT_STATUS.PAID && !isCurrentUserCreator) {
            navigate(ROUTES.PAYMENT.replace(':eventId', `${event.id}`));
        } else if (paymentStatus === PAYMENT_STATUS.PAID) {
            onEventRegistrationCancelClick();
        } else {
            registrationStatus === REGISTRATION_STATUS.ACCEPTED ? onEventRegistrationCancelClick() : register();
        }
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
        paymentStatus,
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