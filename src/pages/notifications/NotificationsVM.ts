import { useCallback, useEffect } from "react";
import useAttendeeAPI from "../../api/AttendeeAPI"
import { useFetch } from "../../api/hooks/ApiHooks";
import { useDispatch } from "react-redux";
import { updateNotificationCount } from "../../redux/slices/UserInfoSlice";

const NotificationsVM = () => {
    const dispatch = useDispatch();
    const { fetchNotifications } = useAttendeeAPI();

    const fetchFunction = useCallback(() => {
        return fetchNotifications();
    }, []);

    const { data, isLoading, error } = useFetch(fetchFunction);

    useEffect(() => {
        if (data?.activeNotifications !== undefined) {
            dispatch(updateNotificationCount(data?.activeNotifications));
        }
    }, [data?.activeNotifications, dispatch]);

    const notifications = data?.attendeeNotifications || [];
    const activeNotifications = data?.activeNotifications;
    const totalNotifications = data?.totalNotifications;

    return { 
        notifications,
        activeNotifications,
        totalNotifications,
        isLoading,
        error
    };
}

export default NotificationsVM;