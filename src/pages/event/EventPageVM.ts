import { useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { useCallback, useEffect, useState } from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';
import useRegistration from '../../hooks/UseRegistration';

const EventPageVM = () => {
	const { eventId } = useParams();
	const { fetchEventById } = useEventAPI();
	const [currentError, setCurrentError] = useState('');

	const fetchFunction = useCallback(() => fetchEventById(Number(eventId)), [eventId]);
	const { data: event, isLoading: isEventLoading, error: eventError } = useFetch(fetchFunction);

	const { eventStart = '', eventEnd = '', inviteUrl, address, currentUserRegistrationStatus, isOpen } = event || {};
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

	const {
		isModalOpen,
		isLoading: isRegistrationLoading,
		error: registrationError,
		registrationStatus,
		register,
		closeModal,
	} = useRegistration({
		eventId: Number(eventId),
		initialRegistrationStatus: currentUserRegistrationStatus ?? null,
		isEventOpen: Boolean(isOpen)
	});

	useEffect(() => {
		if (eventError || registrationError) {
			setCurrentError(eventError || registrationError || '');
		}
	}, [eventError, registrationError]);

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const onEventRegistrationClick = () => register();

	return {
		onEventRegistrationClick,
		event,
		isEventLoading,
		error: currentError,
		registrationError,
		isModalOpen,
		closeModal,
		onAddGuestsClick,
		registrationStatus,
		isRegistrationLoading,
		location,
		...eventDetails,
	};
};

export default EventPageVM;
