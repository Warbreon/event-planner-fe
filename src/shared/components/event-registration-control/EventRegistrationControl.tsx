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
import EventRestrictionsService from '../../../services/EventRestrictionsService';
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
        isSnackbarOpen,
        handleSnackbarClose,
        onEventRegistrationCancelClick,
        isConfirmationDialogOpen,
        handleConfirmationDialogConfirm,
        handleConfirmationDialogClose,
        isCreator,
    } = EventRegistrationControlVM({
        eventId: event.id,
        initialRegistrationStatus: event.currentUserRegistrationStatus ?? null,
        isOpenEvent: event.isOpen,
        creatorEmail: event.creatorEmail,
    });

    const restrictionMessage = EventRestrictionsService.getRestrictionMessage({ event, isCreator });

    const renderContent = () => {
        if (registrationStatus === REGISTRATION_STATUS.PENDING && showWaitingList) {
            return <WaitingListStatus onClick={onEventRegistrationCancelClick} />;
        } else if (restrictionMessage && event.currentUserRegistrationStatus !== REGISTRATION_STATUS.ACCEPTED) {
            return (
                <div className={styles.restrictionMessageContainer}>
                    <Typography variant='body1' className={TYPOGRAPHY_STYLES.WAITING_LIST_MESSAGE}>{restrictionMessage}</Typography>
                </div>
            );
        } else {
            return (
                <EventButton
                    currentUserRegistrationStatus={registrationStatus}
                    onClick={onEventRegistrationClick}
                    disabled={isRegistrationLoading}
                />
            );
        }
    };

    return (
        <>
            {renderContent()}
            {modalEnabled && (
                <RegisterModal
                    isOpen={isModalOpen}
                    isOpenEvent={isCreator || event.isOpen}
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
                title='Confirm Cancellation'
                description='Are you sure you want to cancel your registration ?'
            />
        </>
    );
};

export default EventRegistrationControl;
