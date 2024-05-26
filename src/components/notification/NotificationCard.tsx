import { FC } from 'react'
import { AttendeeNotification } from '../../models/AttendeeNotification';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import styles from './NotificationCard.module.css'
import { NavLink } from 'react-router-dom';
import NotificationCardVM from './NotificationCardVM';
import GenericButton, { ButtonTypes } from '../buttons/ButtonComponent';
import { AVATAR_STYLES } from '../../themes/styles/Avatar';
import SnackbarComponent, { ALERT_SEVERITY } from '../snackbar/SnackbarComponent';

interface NotificationCardProps extends AttendeeNotification {
    markNotificationAsViewed: () => void;
}

const NotificationCard: FC<NotificationCardProps> = ({ id, registrationTime, isNewNotification, user, eventId, eventName, eventStart, markNotificationAsViewed }) => {
    const {
        isSnackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        handleSnackbarClose,
        formattedRegistrationTime,
        formattedCardText,
        viewed,
        getEventUrl, 
        getNotificationStyles, 
        getButtonStyles,
        markAsViewed,
        handleDeclineOnClick,
        handleConfirmOnClick
    } = NotificationCardVM({ registrationTime, isNewNotification, eventStart, eventName, user, markNotificationAsViewed });

    return (
        <div className={styles.container}>
            <Card className={getNotificationStyles(isNewNotification, viewed)} onMouseEnter={() => markAsViewed(id)}>
                <CardContent>
                    <div className={styles.content}>
                        <div className={styles.avatar}>
                            <Avatar className={AVATAR_STYLES.GUEST_LIST_ITEM_AVATAR} alt={user.firstName} src={user.imageUrl} />
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.title}>
                                <Typography variant='h3' className='notification-title' dangerouslySetInnerHTML={{ __html: formattedCardText }}/>
                            </div>
                            <div className={styles.timeAndLink}>
                                <Typography variant='body2'>
                                    {formattedRegistrationTime} 
                                </Typography>
                                <NavLink to={getEventUrl(eventId)} className={styles.linkToEvent}>View Event</NavLink>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <GenericButton
                                title='Decline'
                                styles={getButtonStyles(id, 'decline')}
                                type={ButtonTypes.button}
                                onClick={() => handleDeclineOnClick(id)}
                            />
                            <GenericButton
                                title='Confirm'
                                styles={getButtonStyles(id, 'confirm')}
                                type={ButtonTypes.button}
                                onClick={() => handleConfirmOnClick(id)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <SnackbarComponent
                open={isSnackbarOpen}
                message={snackbarMessage}
                autoHideDuration={5000}
                severity={snackbarSeverity}
                handleClose={handleSnackbarClose}
            />
        </div>
    )
}

export default NotificationCard;