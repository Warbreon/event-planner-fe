import { useState } from "react";
import { useApiRequest } from "../../api/hooks/ApiHooks";
import useAttendeeAPI from "../../api/AttendeeAPI";
import { BUTTON_STYLES } from "../../themes/styles/Button";
import { useDispatch } from "react-redux";
import { removeRejectedAttendee, saveRejectedAttendee } from "../../redux/slices/UrlPathSlice";

const useNotificationActions = () => {
    const [lastClicked, setLastClicked] = useState<Record<number, string>>({});
    const { confirmPendingRegistration, declinePendingRegistration, markNotificationAsViewed } = useAttendeeAPI();
    const { request: patchData, error: patchError } = useApiRequest();
    const dispatch = useDispatch();

    const handleConfirmOnClick = async (attendeeId: number) => {
        if (lastClicked[attendeeId] !== 'confirm') {
            setLastClicked({ ...lastClicked, [attendeeId]: 'confirm' });
            await patchData(() => confirmPendingRegistration(attendeeId));
            dispatch(removeRejectedAttendee(attendeeId))
        }
    }

    const handleDeclineOnClick = async (attendeeId: number) => {
        if (lastClicked[attendeeId] !== 'decline') {
            setLastClicked({ ...lastClicked, [attendeeId]: 'decline' });
            await patchData(() => declinePendingRegistration(attendeeId));
            dispatch(saveRejectedAttendee([attendeeId]))
        }
    }

    const markAsViewed = async (attendeeId: number) => {
        await patchData(() => markNotificationAsViewed(attendeeId));
    }

    const getButtonStyles = (attendeeId: number, type: 'confirm' | 'decline') => {
        switch (type) {
            case 'confirm':
                return lastClicked[attendeeId] === 'confirm'
                    ? BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_CONFIRM_NOTIFICATION_CONFIRMED
                    : BUTTON_STYLES.LIGHT_GRAY_ROUND_SMALL_CONFIRM_NOTIFICATION
            case 'decline':
                return lastClicked[attendeeId] === 'decline'
                    ? BUTTON_STYLES.TEXT_ONLY_DECLINE_NOTIFICATION_DECLINED
                    : BUTTON_STYLES.TEXT_ONLY_DECLINE_NOTIFICATION
        }
    }

    return {
        patchError,
        handleConfirmOnClick,
        handleDeclineOnClick,
        markAsViewed,
        getButtonStyles
    }
}

export default useNotificationActions;