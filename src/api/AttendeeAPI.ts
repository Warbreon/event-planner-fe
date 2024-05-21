import { Notification } from '../models/Notification';
import axiosInstance from './axios/AxiosInstance';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAttendeeAPI = () => {
    const fetchNotifications = () => axiosInstance.get<Notification>(ENDPOINTS.getAttendeeNotifications);
    const markNotificationAsViewed = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.markNotificationAsViewed(attendeeId));
    const confirmPendingRegistration = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.confirmPendingRegistration(attendeeId));
    const declinePendingRegistration = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.declinePendingRegistration(attendeeId));

    return { fetchNotifications, markNotificationAsViewed, confirmPendingRegistration, declinePendingRegistration };
}

export default useAttendeeAPI;