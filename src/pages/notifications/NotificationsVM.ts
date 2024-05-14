import { useCallback, useEffect, useState } from "react";
import useAttendeeAPI from "../../api/AttendeeAPI"
import { useFetch } from "../../api/hooks/ApiHooks";

const NotificationsVM = () => {
    const { fetchNotifications } = useAttendeeAPI();
    const [newNotificationsCount, setNewNotificationsCount] = useState<number>(0);

    const fetchFunction = useCallback(() => {
        return fetchNotifications();
    }, []);

    const { data, isLoading, error } = useFetch(fetchFunction);

    const notifications = data?.attendeeNotifications || [];
    const activeNotifications = data?.activeNotifications ?? 0;
    const totalNotifications = data?.totalNotifications ?? 0;

    useEffect(() => {
        if (!isLoading && !error && data) {
            setNewNotificationsCount(activeNotifications);
        }
    }, [data])

    const markNotificationAsViewed = () => {
        setNewNotificationsCount(prevCount => Math.max(0, prevCount - 1));
    }

    return {
        notifications,
        totalNotifications,
        isLoading,
        error,
        newNotificationsCount,
        markNotificationAsViewed
    };
}

export default NotificationsVM;