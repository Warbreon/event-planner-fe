import { useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { useCallback, useEffect, useState } from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const EventPageVM = () => {
	const { eventId } = useParams();
	const navigate = useNavigate();
	const currentUserId = useSelector((state: StoreState) => state.userInfo.userId);
	const currentUserRole = useSelector((state: StoreState) => state.user.role);

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
	const { name = '',eventStart = '', eventEnd = '', inviteUrl, address, creatorId = 0, isCancelled } = event || {};
	const eventDate = formatDate(eventStart).toString();
	const startTime = formatTime(eventStart);
	const endTime = formatTime(eventEnd);
	const duration = calculateDuration(eventStart, eventEnd);
	const eventName = isCancelled ? `[CANCELLED] ${name}` : name;

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
		onEventRegistrationClick,
		isUserAdminOrCreator,
		event,
		isLoading,
		location,
		isSnackbarOpen,
		handleSnackbarClose,
		...eventDetails,
		eventDate,
		startTime,
		endTime,
		duration,
		eventName
	};
};

export default EventPageVM;
