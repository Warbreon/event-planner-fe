import { Event } from '../models/Event';
import { REGISTRATION_STATUS } from '../models/RegistrationStatus';
import { formatDate, isDateInTheFuture, isDateInThePast } from '../utils/DateConverter';

interface Props {
    event: Event;
    isCurrentUserCreator: boolean;
}

class EventRestrictionsService {
    static getRestrictionMessage({ event, isCurrentUserCreator }: Props) {
        if (!event || isCurrentUserCreator || event.currentUserRegistrationStatus === REGISTRATION_STATUS.ACCEPTED) return null;

        const { tickets, registrationStart, registrationEnd, attendees, isCancelled } = event;
        const acceptedAttendees = attendees?.filter(attendee => attendee.registrationStatus === REGISTRATION_STATUS.ACCEPTED);

        if (isCancelled) {
            return 'Event is cancelled';
        }

        if (acceptedAttendees && tickets <= acceptedAttendees.length) {
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