import { Typography } from '@mui/material';
import { FC } from 'react';
import styles from './RegisterModel.module.css';
import ButtonComponentGroup from '../buttons/buton-group/ButtonComponentGroup';
import { BUTTON_STYLES } from '../../../themes/styles/Button';
import ModalComponent from '../modal/ModalComponent';
import { CheckCircle, ForwardToInbox } from '@mui/icons-material';

interface Props {
    isOpen: boolean;
    isOpenEvent: boolean;
    eventName: string;
    onClose: () => void;
}

const RegisterModal: FC<Props> = ({
    isOpen,
    isOpenEvent,
    eventName,
    onClose,
}) => {
    const title = isOpenEvent ? "Congrats, you're going!" : "Your enquiry have been sent";
    const confirmButtonLabel = isOpenEvent ? 'Done' : 'Got it';
    const icon = isOpenEvent ? <CheckCircle color='secondary' className='modal-icon' /> : <ForwardToInbox color='secondary' className='modal-icon' />;
    const message = isOpenEvent ? (
        <Typography variant='body1' className={`registration-modal ${styles.contentTextContainer}`}>
            You registered to <span className={styles.boldedOpenEventMessage}>{eventName}</span>. See you soon!
        </Typography>
    ) : (
        <Typography variant='body1' className={`registration-modal ${styles.contentTextContainer}`}>
            Thanks for your interest in {eventName}. Registration to this event <span className={styles.boldedClosedEventMessage}>must be approved by event organizer first</span>. Please wait for an email confirmation.
        </Typography>
    )

    return (
        <ModalComponent
            isOpen={isOpen}
            handleClose={onClose}
            content={
                <div className={styles.modalContent}>
                    {icon}
                    <Typography variant='h1' className={`event-form-section ${styles.modalTitle}`}>{title}</Typography>
                    {message}
                </div>
            }
            footer={
                <ButtonComponentGroup
                    buttons={[
                        {
                            label: 'Go to my events',
                            /** TODO: Navigate to My Events */
                            onClick: onClose,
                            className: `${BUTTON_STYLES.OUTLINED_GRAY_BORDER} ${BUTTON_STYLES.MODAL_BUTTON}`,
                        },
                        {
                            label: confirmButtonLabel,
                            onClick: onClose,
                            className: `${BUTTON_STYLES.BLACK_BACKGROUND} ${BUTTON_STYLES.MODAL_BUTTON}`,
                        },
                    ]}
                    className={styles.footerContainer}
                />
            }
        />
    )
}

export default RegisterModal