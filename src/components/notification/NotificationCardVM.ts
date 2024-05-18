import { useState } from "react";
import { AttendeeNotification } from "../../models/AttendeeNotification";
import { NOTIFICATION } from "../../themes/styles/Notification";
import { formatDate, formatDateAndTimeTo_HH_mm_MMMM_D_YYYY } from "../../utils/DateConverter";
import useNotificationActions from "./NotificationActions";

interface NotificationCardVMProps extends Partial<AttendeeNotification> {
    markNotificationAsViewed: () => void;
}

const NotificationCardVM = (notification: NotificationCardVMProps) => {
    const [viewed, setViewed] = useState<boolean>(false);
    const { registrationTime = '', isNewNotification, eventStart = '', eventName = '', user } = notification;

    const { error, handleConfirmOnClick, handleDeclineOnClick, markAsViewed, getConfirmButtonStyles, getDeclinedButtonStyles } = useNotificationActions();

    const formattedEventStart = formatDate(eventStart);
    const formattedRegistrationTime = formatDateAndTimeTo_HH_mm_MMMM_D_YYYY(registrationTime);
    const cardText = `${user?.firstName} ${user?.lastName} registered to attend <strong>${eventName}</strong> on ${formattedEventStart}.`

    const truncateEventName = (eventName: string, excessLength: number) => {
        if (eventName.length <= excessLength) return '...';
        return eventName.slice(0, eventName.length - excessLength) + '...';
    }

    const formattedCardText = cardText.length > 140
        ? `${user?.firstName} ${user?.lastName} registered to attend <strong>${truncateEventName(eventName, cardText.length - 140)}</strong> on ${formattedEventStart}.`
        : cardText;

    const getEventUrl = (eventId: number | string) => {
		return `/events/event/${eventId}`;
	};

    const getNotificationStyles = (isNewNotification: boolean, viewed: boolean) => {
        return isNewNotification && !viewed
            ? NOTIFICATION.ACTIVE_NOTIFICATION 
            : NOTIFICATION.INACTIVE_NOTIFICATION
    }

    const markAsViewedWrapper = async (attendeeId: number) => {
        if (isNewNotification && !viewed) {
            await markAsViewed(attendeeId);
            setViewed(true);
            notification.markNotificationAsViewed();
        }
    }

    return {
        error,
        formattedEventStart,
        formattedRegistrationTime,
        formattedCardText,
        cardText,
        viewed,
        getEventUrl,
        getNotificationStyles,
        getConfirmButtonStyles,
        getDeclinedButtonStyles,
        markAsViewed: markAsViewedWrapper,
        handleDeclineOnClick,
        handleConfirmOnClick
    }
}

export default NotificationCardVM;