import { Event } from '../models/Event';
import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';

const useEventAPI = () => {
	const axios = useAxios();
	const fetchEvents = (tagIds?: number[], days?: number, city?: string) => {
		const params: any = {
			tagIds: tagIds && tagIds.length > 0 ? tagIds.join(",") : undefined,
			days,
			city
		};
		return axios.get<Event[]>(ENDPOINTS.getEvents, { params });
	}
	const fetchEventById = (id: number | string) => axios.get<Event>(ENDPOINTS.getEventById(id));
	const registerToEvent = (userId: number | string, eventId: number | string) =>
		axios.post(ENDPOINTS.registerToEvent, { userId, eventId });

	return { fetchEvents, fetchEventById, registerToEvent };
};
export default useEventAPI;
