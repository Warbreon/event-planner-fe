import { Notification } from '../models/Notification';
import useAxios from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAttendeeAPI = () => {
  const axios = useAxios();
  const fetchNotifications = () => axios.get<Notification>(ENDPOINTS.getAttendeeNotifications);
  const markNotificationAsViewed = (attendeeId: number) => axios.patch(ENDPOINTS.markNotificationAsViewed(attendeeId));
  const confirmPendingRegistration = (attendeeId: number) => axios.patch(ENDPOINTS.confirmPendingRegistration(attendeeId));
  const declinePendingRegistration = (attendeeId: number) => axios.patch(ENDPOINTS.declinePendingRegistration(attendeeId));
  const registerToEvent = (eventId: number | string) =>
    axios.post(ENDPOINTS.registerToEvent, { eventId });
  const unregisterFromEvent = (eventId: number | string) =>
    axios.delete(ENDPOINTS.unregisterFromEvent(eventId));

  return {
    fetchNotifications,
    markNotificationAsViewed,
    confirmPendingRegistration,
    declinePendingRegistration,
    registerToEvent,
    unregisterFromEvent,
  };
}