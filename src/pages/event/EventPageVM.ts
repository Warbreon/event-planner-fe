import { useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { useCallback, useState } from 'react';
import { useFetch, usePost } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const EventPageVM = () => {
	const { eventId } = useParams();
	const [isModalOpen, setModalOpen] = useState(false);
	const userEmail = useSelector((state: StoreState) => state.user.email);

	const { fetchEventById } = useEventAPI();

	const fetchFunction = useCallback(() => {
		return fetchEventById(Number(eventId));
	}, [eventId]);

	const { data: event, isLoading, error } = useFetch(fetchFunction);

	const { postData, isLoading: isRegistrationLoading, error: registrationError, data } = usePost();
	const { registerToEvent } = useEventAPI();

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

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const onEventRegistrationClick = async () => {
		await postData(() => registerToEvent(userEmail, eventId!));

		if (!registrationError && !isRegistrationLoading && data) {
			setModalOpen(true);
			console.log('Registed/Get tickets/ Cancel registration');
		}
	};

	const handleModalClose = () => {
		setModalOpen(false);
	}

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
		isModalOpen,
		handleModalClose,
		error,
		isRegistrationLoading,
	};
};

export default EventPageVM;
