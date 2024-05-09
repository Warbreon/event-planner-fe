import { AttendeeNotification } from "../../models/AttendeeNotification";
import { NOTIFICATION } from "../../themes/styles/Notification";
import { customFormatDateAndTime, formatDate } from "../../utils/DateConverter";
import classNames from "classnames";

const NotificationCardVM = (notification: Partial<AttendeeNotification>) => {
    const { registrationTime = '', isNewNotification, user, eventId, eventName, eventStart = '' } = notification;

    const formattedEventStart = formatDate(eventStart);
    const formattedRegistrationTime = customFormatDateAndTime(registrationTime);

    const getEventUrl = (eventId: number | string) => {
		return `/events/event/${eventId}`;
	};

    const getNotificationClassName = (isNewNotification: boolean) => {
        return classNames({
            [NOTIFICATION.ACTIVE_NOTIFICATION]: isNewNotification,
            [NOTIFICATION.INACTIVE_NOTIFICATION]: !isNewNotification
        });
    }

    const handleDeclineOnClick = () => {
        console.log('Declined');
    }

    const handleConfirmOnClick = () => {
        console.log('Confirmed');
    }

    return {
        formattedEventStart,
        isNewNotification,
        formattedRegistrationTime,
        user,
        eventId,
        eventName,
        eventStart,
        getEventUrl,
        getNotificationClassName,
        handleDeclineOnClick,
        handleConfirmOnClick
    }
}

export default NotificationCardVM;