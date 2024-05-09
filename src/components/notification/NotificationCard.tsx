import { FC } from 'react'
import { AttendeeNotification } from '../../models/AttendeeNotification';
import { Avatar, Card, CardContent, Typography } from '@mui/material';
import styles from './NotificationCard.module.css'
import { Link } from 'react-router-dom';
import NotificationCardVM from './NotificationCardVM';
import GenericButton, { ButtonTypes } from '../buttons/ButtonComponent';
import { BUTTON_STYLES } from '../../themes/styles/Button';

const NotificationCard: FC<AttendeeNotification> = ({ id, registrationTime, isNewNotification, user, eventId, eventName, eventStart }) => {
    const { 
        formattedEventStart, 
        formattedRegistrationTime, 
        getEventUrl, 
        getNotificationClassName, 
        handleDeclineOnClick,
        handleConfirmOnClick
    } = NotificationCardVM({ registrationTime, isNewNotification, user, eventId, eventName, eventStart });

    return (
        <div className={styles.container}>
            <Card className={getNotificationClassName(isNewNotification)}>
                <CardContent>
                    <div className={styles.content}>
                        <div className={styles.avatar}>
                            <Avatar className='attendee-list' alt={user.firstName} src={user.imageUrl} />
                        </div>
                        <div className={styles.textContainer}>
                            <Typography variant='h3' className='notification-title'>
                                {user.firstName} {user.lastName} registered to attend <strong>{eventName}</strong> on {formattedEventStart}
                            </Typography>
                            <div className={styles.timeAndLink}>
                                <Typography variant='body2'>
                                    {formattedRegistrationTime} <Link to={getEventUrl(eventId)} className={styles.linkToEvent}>View Event</Link>
                                </Typography>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <GenericButton
                                title='Decline'
                                styles={BUTTON_STYLES.TEXT_ONLY}
                                type={ButtonTypes.button}
                                onClick={handleDeclineOnClick}
                            />
                            <GenericButton
                                title='Confirm'
                                styles={BUTTON_STYLES.OUTLINED_GRAY_BORDER}
                                type={ButtonTypes.button}
                                onClick={handleConfirmOnClick}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default NotificationCard;