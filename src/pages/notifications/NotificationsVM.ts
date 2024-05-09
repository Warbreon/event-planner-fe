import { useCallback } from "react";
import useAttendeeAPI from "../../api/AttendeeAPI"
import { useFetch } from "../../api/hooks/ApiHooks";

const NotificationsVM = () => {
    const { fetchNotifications, markNotificationAsViewed, confirmPendingRegistration, declinePendingRegistration } = useAttendeeAPI();

    const fetchFunction = useCallback(() => {
        return fetchNotifications();
    }, []);

    const { data, isLoading, error } = useFetch(fetchFunction);
    const notifications = data?.attendeeNotifications || [];
    const activeNotifications = data?.activeNotifications;
    const totalNotifications = data?.totalNotifications;

    return { 
        notifications,
        activeNotifications,
        totalNotifications,
        isLoading,
        error,
        markNotificationAsViewed,
        confirmPendingRegistration,
        declinePendingRegistration 
    };
}

export default NotificationsVM;