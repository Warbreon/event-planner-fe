import { useState } from "react";
import useAttendeeAPI from "../../api/AttendeeAPI";
import { useApiRequest } from "../../api/hooks/ApiHooks";
import { AttendeeNotification } from "../../models/AttendeeNotification";
import { BUTTON_STYLES } from "../../themes/styles/Button";
import { NOTIFICATION } from "../../themes/styles/Notification";
import { formatDate, formatDateAndTimeTo_HH_mm_MMMM_D_YYYY } from "../../utils/DateConverter";

interface NotificationCardVMProps extends Partial<AttendeeNotification> {
    markNotificationAsViewed: () => void;
}

const NotificationCardVM = (notification: NotificationCardVMProps) => {
    const [lastClicked, setLastClicked] = useState<string>('');
    const [viewed, setViewed] = useState<boolean>(false);
    const { registrationTime = '', isNewNotification, eventStart = '', eventName = '', user } = notification;

    const { markNotificationAsViewed, confirmPendingRegistration, declinePendingRegistration } = useAttendeeAPI();
    const { request: patchData, error } = useApiRequest();

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

    const getConfirmButtonStyles = () => {
        return lastClicked === 'confirm' 
            ? BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_CONFIRM_NOTIFICATION_CONFIRMED 
            : BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_CONFIRM_NOTIFICATION
    }

    const getDeclinedButtonStyles = () => {
        return lastClicked === 'decline'
            ? BUTTON_STYLES.TEXT_ONLY_DECLINE_NOTIFICATION_DECLINED 
            : BUTTON_STYLES.TEXT_ONLY_DECLINE_NOTIFICATION
    }

    const markAsViewed = async (attendeeId: number) => {
        if (isNewNotification && !viewed) {
            await patchData(() => markNotificationAsViewed(attendeeId));
            setViewed(true);
            notification.markNotificationAsViewed();
        }
    }

    const handleDeclineOnClick = async (attendeeId: number) => {
        setLastClicked('decline');
        if (lastClicked !== 'decline') {
            await patchData(() => declinePendingRegistration(attendeeId));
        }
    }

    const handleConfirmOnClick = async (attendeeId: number) => {
        setLastClicked('confirm');
        if (lastClicked !== 'confirm') {
            await patchData(() => confirmPendingRegistration(attendeeId));
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
        markAsViewed,
        handleDeclineOnClick,
        handleConfirmOnClick
    }
}

export default NotificationCardVM;