import { useNavigate, useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { useEffect } from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';

const EventPageVM = () => {
	const { eventId } = useParams();
	const navigate = useNavigate();

	const { fetchEventById } = useEventAPI();

	const { data: event, isLoading, error } = useFetch(() => fetchEventById(Number(eventId)));

	const { eventStart = '', eventEnd = '', inviteUrl, address } = event || {};
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

	useEffect(() => {
		if (error) {
			navigate('/');
		}
	}, [error, navigate]);

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const onEventRegistrationClick = () => {
		console.log('Registed/Get tickets/ Cancel registration');
	};

	return {
		onAddGuestsClick,
		onEventRegistrationClick,
		event,
		isLoading,
		location,
		eventDate,
		startTime,
		endTime,
		duration,
	};
};

export default EventPageVM;
