import { useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { useCallback, useEffect, useState } from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';

const EventPageVM = () => {
	const { eventId } = useParams();
	const { fetchEventById } = useEventAPI();
	const [currentError, setCurrentError] = useState('');
	const [isSnackbarOpen, setSnackbarOpen] = useState(false);

	const fetchFunction = useCallback(() => fetchEventById(Number(eventId)), [eventId]);
	const { data: event, isLoading: isEventLoading, error: eventError } = useFetch(fetchFunction);

	const { eventStart = '', eventEnd = '', inviteUrl, address } = event || {};
	const eventDetails = {
		eventDate: formatDate(eventStart),
		startTime: formatTime(eventStart),
		endTime: formatTime(eventEnd),
		duration: calculateDuration(eventStart, eventEnd),
	};

	let location = 'TBD';
	if (inviteUrl && !address) {
		location = 'Online';
	} else if (!inviteUrl && address) {
		location = address.city;
	}

	useEffect(() => {
		if (eventError) {
			setCurrentError(eventError || '');
			setSnackbarOpen(true);
		}
	}, [eventError, setSnackbarOpen]);

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

	return {
		event,
		isEventLoading,
		error: currentError,
		onAddGuestsClick,
		location,
		isSnackbarOpen,
		handleSnackbarClose,
		...eventDetails,
	};
};

export default EventPageVM;
