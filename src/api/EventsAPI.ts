import { Event } from '../models/Event';
import { ENDPOINTS } from './endpoints/Endpoints';
import { PaginatedResponse } from '../models/response/PaginatedResponse';
import axiosInstance from './axios/AxiosInstance';

const useEventAPI = () => {
	const fetchEvents = (tagIds?: number[], days?: number, city?: string, name?: string) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name
		};
		return axiosInstance.get<Event[]>(ENDPOINTS.getEvents, { params });
	}
	const fetchPaginatedEvents = (tagIds?: number[], days?: number, city?: string, name?: string, page?: number, size?: number) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name, page, size
		};
		return axiosInstance.get<PaginatedResponse<Event>>(ENDPOINTS.getEvents, { params });
	}
	const fetchEventById = (id: number) => axiosInstance.get<Event>(ENDPOINTS.getEventById(id));

	const fetchEventsCreatedByUser = () => axiosInstance.get<Event[]>(ENDPOINTS.getEventsCreatedByUser);
	const fetchEventsUserAttending = () => axiosInstance.get<Event[]>(ENDPOINTS.getEventsUserAttending);
	const createEvent = (eventData: any) => axiosInstance.post(ENDPOINTS.createNewEvent, eventData);
	const cancelEvent = (id: number) => axiosInstance.patch<Event>(ENDPOINTS.cancelEvent(id));

	return {
		fetchEvents,
		fetchEventById,
		fetchEventsCreatedByUser,
		fetchEventsUserAttending,
		fetchPaginatedEvents,
		createEvent,
	 	cancelEvent
	};
};
export default useEventAPI;
