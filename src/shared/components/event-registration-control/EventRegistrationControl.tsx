import React from 'react';
import { REGISTRATION_STATUS } from '../../../models/RegistrationStatus';
import SnackbarComponent, { ALERT_SEVERITY } from '../../../components/snackbar/SnackbarComponent';
import EventButton from '../buttons/event-button/EventButton';
import RegisterModal from '../register-modal/RegisterModal';
import EventRegistrationControlVM from './EventRegistrationControlVM';
import WaitingListStatus from '../../../components/waiting-list-status/WaitingListStatus';
import ConfirmationDialog from '../../../components/confirmation-dialog/ConfirmationDialog';
import { Typography } from '@mui/material';
import { TYPOGRAPHY_STYLES } from '../../../themes/styles/Typography';
import { Event } from '../../../models/Event';
import styles from './EventRegistrationControl.module.css';

interface EventRegistrationControlProps {
    event: Event;
    modalEnabled?: boolean;
    snackbarClassName?: string;
    showWaitingList?: boolean;
}

const EventRegistrationControl: React.FC<EventRegistrationControlProps> = ({
    event,
    modalEnabled = false,
    snackbarClassName,
    showWaitingList = false,
}) => {
    const {
        onEventRegistrationClick,
        isModalOpen,
        closeModal,
        registrationError,
        isRegistrationLoading,
        registrationStatus,
        paymentStatus,
        isSnackbarOpen,
        handleSnackbarClose,
        onEventRegistrationCancelClick,
        isConfirmationDialogOpen,
        handleConfirmationDialogConfirm,
        handleConfirmationDialogClose,
        isCurrentUserCreator,
        canShowRestriction,
        restrictionMessage,
    } = EventRegistrationControlVM({
        event,
    });

    const renderContent = () => {
        if (registrationStatus === REGISTRATION_STATUS.PENDING && showWaitingList) {
            return <WaitingListStatus onClick={onEventRegistrationCancelClick} />;
        }

        if (canShowRestriction) {
            return (
                <div className={styles.restrictionMessageContainer}>
                    <Typography variant='body1' className={TYPOGRAPHY_STYLES.REGISTRATION_RESTRICTION_MESSAGE}>
                        {restrictionMessage}
                    </Typography>
                </div>
            );
        }

        return (
            <EventButton
                currentUserRegistrationStatus={registrationStatus}
                currentUserPaymentStatus={paymentStatus}
                isPaidEvent={event.price > 0}
                onClick={onEventRegistrationClick}
                disabled={isRegistrationLoading}
            />
        );
    };

    return (
        <>
            {renderContent()}
            {modalEnabled && (
                <RegisterModal
                    isOpen={isModalOpen}
                    isOpenEvent={isCurrentUserCreator || event.isOpen}
                    eventName={event.name}
                    onClose={closeModal}
                />
            )}
            <SnackbarComponent
                open={isSnackbarOpen}
                message={registrationError ?? ''}
                autoHideDuration={5000}
                handleClose={handleSnackbarClose}
                severity={ALERT_SEVERITY.ERROR}
                className={snackbarClassName}
            />
            <ConfirmationDialog
                open={isConfirmationDialogOpen}
                onClose={handleConfirmationDialogClose}
                onConfirm={handleConfirmationDialogConfirm}
                title='Confirm cancellation'
                description='Are you certain you want to cancel your registration ?'
            />
        </>
    );
};

export default EventRegistrationControl;
