import { FC } from 'react'
import { AttendeeNotification } from '../../models/AttendeeNotification';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import styles from './NotificationCard.module.css'
import { NavLink } from 'react-router-dom';
import NotificationCardVM from './NotificationCardVM';
import GenericButton, { ButtonTypes } from '../buttons/ButtonComponent';

const NotificationCard: FC<AttendeeNotification> = ({ id, registrationTime, isNewNotification, user, eventId, eventName, eventStart }) => {
    const {
        error,
        formattedEventStart, 
        formattedRegistrationTime,
        viewed,
        getEventUrl, 
        getNotificationClassName, 
        getConfirmButtonClassName,
        getDeclinedButtonClassName,
        markAsViewed,
        handleDeclineOnClick,
        handleConfirmOnClick
    } = NotificationCardVM({ registrationTime, isNewNotification, eventStart });

    if (error) return <div className={styles.container}>{error}</div>;

    return (
        <div className={styles.container}>
            <Card className={getNotificationClassName(isNewNotification, viewed)} onMouseEnter={() => markAsViewed(id)}>
                <CardContent>
                    <div className={styles.content}>
                        <div className={styles.avatar}>
                            <Avatar className='attendee-list' alt={user.firstName} src={user.imageUrl} />
                        </div>
                        <div className={styles.textContainer}>
                            <Typography variant='h3' className='notification-title'>
                                {user.firstName} {user.lastName} registered to attend <strong>{eventName}</strong> on {formattedEventStart}.
                            </Typography>
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
                                styles={getDeclinedButtonClassName()}
                                type={ButtonTypes.button}
                                onClick={() => handleDeclineOnClick(id)}
                            />
                            <GenericButton
                                title='Confirm'
                                styles={getConfirmButtonClassName()}
                                type={ButtonTypes.button}
                                onClick={() => handleConfirmOnClick(id)}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NotificationCard;