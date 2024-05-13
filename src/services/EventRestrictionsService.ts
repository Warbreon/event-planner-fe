import { Event } from '../models/Event';

class EventRestrictionsService {
    static getRestrictionMessage(event: Event): string | null {
        if (event.tickets < 1) {
            return "Tickets are sold out.";
        }
        // if (!event.isRegistrationOpen) {
        //     return "Registration is currently closed.";
        // }
        // if (event.isInPast) {
        //     return "This event has already occurred.";
        // }

        return null;
    }
}

export default EventRestrictionsService;