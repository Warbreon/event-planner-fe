import { Event } from '../models/Event';
import { ENDPOINTS } from './endpoints/Endpoints';
import AxiosHook from './axios/Axios';

const EventAPIHook = () => {
	const { API } = AxiosHook();
	const fetchEvents = () => API.get<Event[]>(ENDPOINTS.getAllEvents);
	const fetchEventById = (id: number | string) => API.get<Event>(ENDPOINTS.getEventById(id));
	const registerToEvent = (userId: number | string, eventId: number | string) =>
		API.post(ENDPOINTS.registerToEvent, { userId, eventId });

	return { fetchEvents, fetchEventById, registerToEvent };
};
export default EventAPIHook;
