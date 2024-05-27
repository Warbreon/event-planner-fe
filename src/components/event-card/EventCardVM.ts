import { Event } from '../../models/Event';
import { formatDate } from '../../utils/DateConverter';

const EventCardVM = (event: Partial<Event>) => {
	const { id: eventId, eventStart = '', address, inviteUrl } = event;
	const eventDate = formatDate(eventStart);

	let location = 'TBD';
	if (inviteUrl && !address) {
		location = 'Online';
	} else if (!inviteUrl && address) {
		location = address.city;
	}

	const getEventUrl = () => `/events/event/${eventId}`;

	return {
		getEventUrl,
		eventDate,
		location,
	};
};

export default EventCardVM;
