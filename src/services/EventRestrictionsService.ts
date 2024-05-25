import { Event } from '../models/Event';
import { formatDate, isDateInTheFuture, isDateInThePast } from '../utils/DateConverter';

interface Props {
    event: Event;
    isCurrentUserCreator: boolean;
}

class EventRestrictionsService {
    static getRestrictionMessage({ event, isCurrentUserCreator }: Props) {
        if (!event || isCurrentUserCreator) return null;

        const { tickets, registrationStart, registrationEnd, attendees, isCancelled } = event;

        if (isCancelled) {
            return 'Event is cancelled';
        }

        if (attendees && tickets <= attendees.length) {
            return 'Tickets sold out';
        }

        if (registrationStart && isDateInTheFuture(registrationStart)) {
            return `Registration starts ${formatDate(registrationStart)}`;
        }

        if (registrationEnd && isDateInThePast(registrationEnd)) {
            return 'Registration is now closed';
        }

        return null;
    }
}

export default EventRestrictionsService;