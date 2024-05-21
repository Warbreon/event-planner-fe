import { useNavigate, useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { useCallback, useEffect } from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const EventPageVM = () => {
	const { eventId } = useParams();
	const navigate = useNavigate();
	const currentUserId = useSelector((state: StoreState) => state.userInfo.userId);
	const currentUserRole = useSelector((state: StoreState) => state.user.role);

	const { fetchEventById } = useEventAPI();

	const fetchFunction = useCallback(() => {
		return fetchEventById(Number(eventId));
	}, [eventId]);

	const { data: event, isLoading, error } = useFetch(fetchFunction);

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

	const isUserAdminOrCreator = currentUserRole === 'SYSTEM_ADMIN' || currentUserId === creatorId;

	return {
		onAddGuestsClick,
		onEventRegistrationClick,
		isUserAdminOrCreator,
		event,
		isLoading,
		location,
		eventDate,
		startTime,
		endTime,
		duration,
		eventName
	};
};

export default EventPageVM;
