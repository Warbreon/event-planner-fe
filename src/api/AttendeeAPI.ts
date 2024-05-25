import { Notification } from '../models/Notification';
import axiosInstance from './axios/AxiosInstance';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAttendeeAPI = () => {
    const fetchNotifications = () => axiosInstance.get<Notification>(ENDPOINTS.getAttendeeNotifications);
    const markNotificationAsViewed = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.markNotificationAsViewed(attendeeId));
    const confirmPendingRegistration = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.confirmPendingRegistration(attendeeId));
    const declinePendingRegistration = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.declinePendingRegistration(attendeeId));
  const registerToEvent = (eventId: number | string) =>
    axiosInstance.post(ENDPOINTS.registerToEvent, { eventId });
  const unregisterFromEvent = (eventId: number | string) =>
    axiosInstance.delete(ENDPOINTS.unregisterFromEvent(eventId));

  return {
    fetchNotifications,
    markNotificationAsViewed,
    confirmPendingRegistration,
    declinePendingRegistration,
    registerToEvent,
    unregisterFromEvent,
  };
}

export default useAttendeeAPI;