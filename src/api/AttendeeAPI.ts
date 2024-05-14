import { Notification } from '../models/Notification';
import useAxios from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAttendeeAPI = () => {
    const axios = useAxios();
    const fetchNotifications = () => axios.get<Notification>(ENDPOINTS.getAttendeeNotifications);
    const markNotificationAsViewed = (attendeeId: number) => axios.patch(ENDPOINTS.markNotificationAsViewed(attendeeId));
    const confirmPendingRegistration = (attendeeId: number) => axios.patch(ENDPOINTS.confirmPendingRegistration(attendeeId));
    const declinePendingRegistration = (attendeeId: number) => axios.patch(ENDPOINTS.declinePendingRegistration(attendeeId));

    return { fetchNotifications, markNotificationAsViewed, confirmPendingRegistration, declinePendingRegistration };
}

export default useAttendeeAPI;