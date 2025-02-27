import { Notification } from '../models/Notification';
import axiosInstance from './axios/AxiosInstance';
import { ENDPOINTS } from './endpoints/Endpoints';
import {Attendee} from "../models/Attendee";

const useAttendeeAPI = () => {
    const fetchNotifications = () => axiosInstance.get<Notification>(ENDPOINTS.getAttendeeNotifications);
    const markNotificationAsViewed = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.markNotificationAsViewed(attendeeId));
    const confirmPendingRegistration = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.confirmPendingRegistration(attendeeId));
    const declinePendingRegistration = (attendeeId: number) => axiosInstance.patch(ENDPOINTS.declinePendingRegistration(attendeeId));
    const updateEventAttendees = (eventId: number, userId: number[]) => axiosInstance.patch(ENDPOINTS.updateEventAttendees(eventId), userId);
    const getEventAttendees = (eventId: number) => axiosInstance.get<Attendee[]>(ENDPOINTS.getEventAttendees(eventId));
    const registerToEvent = (eventId: number | string) => axiosInstance.post(ENDPOINTS.registerToEvent, { eventId });
    const unregisterFromEvent = (eventId: number | string) => axiosInstance.delete(ENDPOINTS.unregisterFromEvent(eventId));


    return {
        fetchNotifications,
        markNotificationAsViewed,
        confirmPendingRegistration,
        declinePendingRegistration,
        updateEventAttendees,
        getEventAttendees,
        registerToEvent,
        unregisterFromEvent,
    };
}

export default useAttendeeAPI;