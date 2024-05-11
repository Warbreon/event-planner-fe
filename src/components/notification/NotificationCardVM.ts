import { useState } from "react";
import useAttendeeAPI from "../../api/AttendeeAPI";
import { useApiRequest } from "../../api/hooks/ApiHooks";
import { AttendeeNotification } from "../../models/AttendeeNotification";
import { BUTTON_STYLES } from "../../themes/styles/Button";
import { NOTIFICATION } from "../../themes/styles/Notification";
import { customFormatDateAndTime, formatDate } from "../../utils/DateConverter";
import classNames from "classnames";

const NotificationCardVM = (notification: Partial<AttendeeNotification>) => {
    const [lastClicked, setLastClicked] = useState<string>('');
    const [viewed, setViewed] = useState<boolean>(false);
    const { registrationTime = '', isNewNotification, eventStart = '' } = notification;

    const { markNotificationAsViewed, confirmPendingRegistration, declinePendingRegistration } = useAttendeeAPI();
    const { request: patchData, error } = useApiRequest();

    const formattedEventStart = formatDate(eventStart);
    const formattedRegistrationTime = customFormatDateAndTime(registrationTime);

    const getEventUrl = (eventId: number | string) => {
		return `/events/event/${eventId}`;
	};

    const getNotificationClassName = (isNewNotification: boolean, viewed: boolean) => {
        return classNames({
            [NOTIFICATION.ACTIVE_NOTIFICATION]: isNewNotification && !viewed,
            [NOTIFICATION.INACTIVE_NOTIFICATION]: !isNewNotification || viewed
        });
    }

    const getConfirmButtonClassName = () => {
        return classNames({
            [BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_ACTIVE_NOTIFICATION_ACCEPTED]: lastClicked === 'confirm',
            [BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_ACTIVE_NOTIFICATION]: lastClicked !== 'confirm'
        });
    }

    const getDeclinedButtonClassName = () => {
        return classNames({
            [BUTTON_STYLES.TEXT_ONLY_DECLINED]: lastClicked === 'decline',
            [BUTTON_STYLES.TEXT_ONLY_DECLINE]: lastClicked !== 'decline',
        });
    }

    const markAsViewed = async (attendeeId: number | string) => {
        if (isNewNotification && !viewed) {
            await patchData(() => markNotificationAsViewed(attendeeId));
            setViewed(true);
        }
    }

    const handleDeclineOnClick = async (attendeeId: number | string) => {
        setLastClicked('decline');
        if (lastClicked !== 'decline') {
            await patchData(() => declinePendingRegistration(attendeeId));
        }
    }

    const handleConfirmOnClick = async (attendeeId: number | string) => {
        setLastClicked('confirm');
        if (lastClicked !== 'confirm') {
            await patchData(() => confirmPendingRegistration(attendeeId));
        }
    }

    return {
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
    }
}

export default NotificationCardVM;