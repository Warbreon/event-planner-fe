import { Event } from "../models/Event";
import { ENDPOINTS } from "./endpoints/Endpoints";
import API from "./Axios";

export const fetchEvents = () => API.get<Event[]>(`${ENDPOINTS.getAllEvents}`);
export const fetchEventById = (id: number | string) => API.get<Event>(`${ENDPOINTS.getEventById(id)}`);

export const registerToEvent = (userId: number | string, eventId: number | string) => API.post(`${ENDPOINTS.registerToEvent}`, { userId, eventId });