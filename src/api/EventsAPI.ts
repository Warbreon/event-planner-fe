import { Event } from '../models/Event';
import { ENDPOINTS } from './endpoints/Endpoints';
import { PaginatedResponse } from '../models/response/PaginatedResponse';
import axiosInstance from './axios/AxiosInstance';

interface FetchPaginatedEventsOptions {
    tagIds?: number[];
    days?: number;
    city?: string;
    name?: string;
    excludeEventId?: number;
    page?: number;
    size?: number;
}

const useEventAPI = () => {
	const fetchEvents = (tagIds?: number[], days?: number, city?: string, name?: string, excludeEventId?: number) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name, excludeEventId
		};
		return axiosInstance.get<Event[]>(ENDPOINTS.getEvents, { params });
	}
	const fetchPaginatedEvents = ({
		tagIds,
		days,
		city,
		name,
		excludeEventId,
		page,
		size
	}: FetchPaginatedEventsOptions) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name, excludeEventId, page, size
		};
		return axiosInstance.get<PaginatedResponse<Event>>(ENDPOINTS.getEvents, { params });
	}
	const fetchEventById = (id: number) => axiosInstance.get<Event>(ENDPOINTS.getEventById(id));

	const fetchEventsCreatedByUser = () => axiosInstance.get<Event[]>(ENDPOINTS.getEventsCreatedByUser);
	const fetchEventsUserAttending = () => axiosInstance.get<Event[]>(ENDPOINTS.getEventsUserAttending);
	const createEvent = (eventData: any) => axiosInstance.post(ENDPOINTS.createNewEvent, eventData);
	const editEvent = (eventId: number, eventData: any) => axiosInstance.put(ENDPOINTS.editEvent(eventId), eventData);

	const confirmEventCreatorToEdit = (eventId: number, userId: number) => axiosInstance.get<boolean>(ENDPOINTS.confirmEventCreator(eventId, userId));
	const cancelEvent = (id: number) => axiosInstance.patch<Event>(ENDPOINTS.cancelEvent(id));

	return {
		fetchEvents,
		fetchEventById,
		fetchEventsCreatedByUser,
		fetchEventsUserAttending,
		fetchPaginatedEvents,
		createEvent,
		editEvent,
		confirmEventCreatorToEdit,
	 	cancelEvent
	};
};
export default useEventAPI;
