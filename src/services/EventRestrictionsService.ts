import { Event } from '../models/Event';
import { formatDate, isDateInTheFuture, isDateInThePast } from '../utils/DateConverter';

interface Props {
    event: Event;
    isCreator: boolean;
}

class EventRestrictionsService {
    static getRestrictionMessage({ event, isCreator }: Props) {
        if (!event || isCreator) return null;

        const { tickets, registrationStart, registrationEnd } = event;

        if (tickets < 1) {
            return 'Tickets are sold out.';
        }

        if (registrationStart && isDateInTheFuture(registrationStart)) {
            return `Registration starts on ${formatDate(registrationStart)}`;
        }

        if (registrationEnd && isDateInThePast(registrationEnd)) {
            return 'Registration has ended.';
        }

        return null;
    }
}

export default EventRestrictionsService;