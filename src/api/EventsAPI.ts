import { Event } from '../models/Event';
import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { PaginatedResponse } from '../models/response/PaginatedResponse';

const useEventAPI = () => {
	const axios = useAxios();
	const fetchEvents = (tagIds?: number[], days?: number, city?: string, name?: string) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name
		};
		return axios.get<Event[]>(ENDPOINTS.getEvents, { params });
	}
	const fetchPaginatedEvents = (tagIds?: number[], days?: number, city?: string, name?: string, page?: number, size?: number) => {
		const params: any = {
			tagIds: tagIds?.length ?? 0 ? tagIds?.join(",") : undefined, days, city, name, page, size
		};
		return axios.get<PaginatedResponse<Event>>(ENDPOINTS.getEvents, { params });
	}
	const fetchEventById = (id: number | string) => axios.get<Event>(ENDPOINTS.getEventById(id));

	const fetchEventsCreatedByUser = () => axios.get<Event[]>(ENDPOINTS.getEventsCreatedByUser);
	const fetchEventsUserAttending = () => axios.get<Event[]>(ENDPOINTS.getEventsUserAttending);

	return {
		fetchEvents,
		fetchEventById,
		fetchEventsCreatedByUser,
	 fetchEventsUserAttending,
	 fetchPaginatedEvents
	};
};
export default useEventAPI;
