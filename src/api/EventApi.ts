import { Event } from "../models/Event";
import { ENDPOINTS } from "./endpoints/Endpoints";
import API from "./Axios";
import { Tag } from "../models/Tag";

export const fetchEvents = (tagIds?: number[]) => {
    const tagIdsParam = tagIds && tagIds.length > 0 ? `&tagIds=${tagIds.join(",")}` : '';
    return API.get<Event[]>(`${ENDPOINTS.getEvents}${tagIdsParam}`);
}
export const fetchEventById = (id: number | string) => API.get<Event>(ENDPOINTS.getEventById(id));
export const fetchAllTags = () => API.get<Tag[]>(ENDPOINTS.getAllTags)

export const registerToEvent = (userId: number | string, eventId: number | string) => API.post(ENDPOINTS.registerToEvent, { userId, eventId });