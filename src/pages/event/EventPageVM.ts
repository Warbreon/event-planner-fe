import { useNavigate, useParams } from 'react-router';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import {useCallback, useEffect} from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';
import {useSelector} from 'react-redux';
import {StoreState} from '../../redux/store/Store';
import {UserRoles} from "../../utils/PermissionParser";

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


	const { eventStart = '', eventEnd = '', inviteUrl, address, creatorId = 0 } = event || {};
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

	const onEventRegistrationClick = () => {
		console.log('Registed/Get tickets/ Cancel registration');
	};

	const isUserCreator = useSelector((state: StoreState) =>
		event?.creatorId === state.userInfo.userId &&
		state.user.role === UserRoles.EVENT_ADMIN
	);

	const isUserAdminOrCreator = currentUserRole === 'SYSTEM_ADMIN' || currentUserId === creatorId;

	return {
		onEventRegistrationClick,
		isUserAdminOrCreator,
		event,
		isLoading,
		location,
		eventDate,
		startTime,
		endTime,
		duration,
		isUserCreator,
	};
};

export default EventPageVM;
