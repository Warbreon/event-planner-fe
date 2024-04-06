import { CardEvent } from "../../components/event-card/EventCardInterfaces";
import mockEvents from "./mocks.json";

export const loadEvents = (): CardEvent[] => {
    return mockEvents as CardEvent[];
}