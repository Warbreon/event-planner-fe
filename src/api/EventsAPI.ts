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

	return { fetchEvents, fetchEventById };
};
export default useEventAPI;
