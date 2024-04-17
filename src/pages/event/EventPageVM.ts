
import { useParams } from 'react-router';
import { Event } from '../../models/Event';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import { useFetchEventById } from '../../api/EventApi';

const EventPageVM = () => {
	const { eventId } = useParams();
	const { event, error } = useFetchEventById(Number(eventId));

	const { eventStart = '', eventEnd = '', inviteUrl, address } = event;
	const eventDate = formatDate(eventStart).toString();
	const startTime = formatTime(eventStart);
	const endTime = formatTime(eventEnd);
	const duration = calculateDuration(eventStart, eventEnd);
	
	let location = 'TBD';
	if (inviteUrl && !address) {
		location = 'Online';
	} else if (!inviteUrl && address) {
		location = address.city;
	}

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const onEventRegistrationClick = () => {
		console.log('Registed/Get tickets/ Cancel registration');
	};

	return { onAddGuestsClick, onEventRegistrationClick, event, error, eventId, location, eventDate,  startTime ,endTime, duration};
};

export default EventPageVM;
