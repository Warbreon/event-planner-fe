import { IEvent } from "../../components/event-card/EventCardInterfaces";
import mockEvents from "./mocks.json";

export const loadEvents = (): IEvent[] => {
    return mockEvents as IEvent[];
}