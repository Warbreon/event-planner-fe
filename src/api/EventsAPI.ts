import { Event } from '../models/Event';
import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { PaginatedResponse } from '../models/response/PaginatedResponse';

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
	const axios = useAxios();
	const fetchEvents = (tagIds?: number[], days?: number, city?: string, name?: string, excludeEventId?: number) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name, excludeEventId
		};
		return axios.get<Event[]>(ENDPOINTS.getEvents, { params });
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
		return axios.get<PaginatedResponse<Event>>(ENDPOINTS.getEvents, { params });
	}
	const fetchEventById = (id: number) => axios.get<Event>(ENDPOINTS.getEventById(id));
	const registerToEvent = (userId: number, eventId: number) =>
		axios.post(ENDPOINTS.registerToEvent, { userId, eventId });

	const fetchEventsCreatedByUser = () => axios.get<Event[]>(ENDPOINTS.getEventsCreatedByUser);
	const fetchEventsUserAttending = () => axios.get<Event[]>(ENDPOINTS.getEventsUserAttending);

	return {
		fetchEvents,
		fetchEventById,
		registerToEvent,
		fetchEventsCreatedByUser,
		fetchEventsUserAttending,
		fetchPaginatedEvents
	};
};
export default useEventAPI;
