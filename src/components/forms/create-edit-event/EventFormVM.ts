import { EventFormValues } from '../../../interfaces/EventFormValuesInterface';
import { combineDateTime, formatTime } from '../../../utils/DateConverter';
import { formatAgendaItems, parseAgendaItems } from '../../../utils/AgendaUtils';
import { useFetch } from '../../../api/hooks/ApiHooks';
import useUserAPI from '../../../api/UserAPI';
import useTagsAPI from '../../../api/TagsAPI';
import { useCallback, useEffect } from 'react';
import { LocationTags } from '../../../constants/LocationTags';
import { Event } from '../../../models/Event';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { saveFetchedAttendee } from '../../../redux/slices/EditEventSlice';
import { User } from '../../../models/User';

const EventFormVM = (event: Event | null) => {
	const dispatch = useDispatch();
	const {
		name,
		imageUrl,
		cardUrl,
		eventStart,
		eventEnd,
		address,
		inviteUrl,
		agenda,
		isOpen,
		registrationStart,
		registrationEnd,
		price,
		tickets,
		currency,
		tags: selectedTags,
		attendees,
	} = event || {};

	const tagsIds: string[] = selectedTags?.map((tag) => tag.name) || [];

	const eventStartTime = formatTime(eventStart || '');
	const eventEndTime = formatTime(eventEnd || '');

	const registrationStartTime = formatTime(registrationStart || '');
	const registrationEndTime = formatTime(registrationEnd || '');

	const parsedAgendaItems = parseAgendaItems(agenda || []);

	const getInitialLocationKey = () => {
		if (event) {
			if (address) {
				return LocationTags.PHYSICAL;
			}
			if (inviteUrl) {
				return LocationTags.ONLINE;
			}
			return LocationTags.TBD;
		}

		return LocationTags.PHYSICAL;
	};

	useEffect(() => {
		const attendingUsers: User[] = attendees?.map((attendee) => attendee.user) || [];
		dispatch(saveFetchedAttendee(attendingUsers));
	}, [attendees, dispatch]);

	const getInitialAttendeeIds = () => {
		return attendees?.map((t) => t.user.id) || [];
	};

	const initialValues: EventFormValues = {
		imageUrl: null,
		eventStartDate: moment(eventStart) || null,
		eventStartTime: moment(eventStartTime, 'HH:mm') || null,
		eventEndDate: moment(eventEnd) || null,
		eventEndTime: moment(eventEndTime, 'HH:mm') || null,
		eventName: name || '',
		eventTag: tagsIds || [],
		cardUrl: null,
		addressId: address?.id || null,
		inviteUrl: inviteUrl || '',
		agenda: parsedAgendaItems || null,
		isOpen: isOpen || true,
		registrationStartDate: moment(registrationStart),
		registrationStartTime: moment(registrationStartTime, 'HH:mm'),
		registrationEndDate: moment(registrationEnd),
		registrationEndTime: moment(registrationEndTime, 'HH:mm'),
		attendees: getInitialAttendeeIds() || [],
		price: price || 0,
		currency: currency || 'eur',
		tickets: tickets || 0,
		locationKey: getInitialLocationKey(),
	};

	const { fetchUsers } = useUserAPI();
	const fetchFuntion = useCallback(() => {
		return fetchUsers();
	}, []);

	const { data: users, isLoading: isLoadingUsers, error: errorFetchingUsers } = useFetch(fetchFuntion);

	const fetchAllTags = useTagsAPI();
	const { data: eventTags, isLoading: isLoadingTags, error: errorFetchingTags } = useFetch(fetchAllTags);

	const onSubmit = (values: EventFormValues) => {
		const eventStart = combineDateTime(values.eventStartDate, values.eventStartTime);
		const eventEnd = combineDateTime(values.eventEndDate, values.eventEndTime);
		const formattedAgenda = formatAgendaItems(values.agenda ?? []);
		const registrationStart = combineDateTime(values.registrationStartDate, values.registrationStartTime);
		const registrationEnd = combineDateTime(values.registrationEndDate, values.registrationEndTime);

		const submitValues = {
			imageUrl: values.imageUrl,
			cardUrl: values.cardUrl,
			eventStart,
			eventEnd,
			formattedAgenda,
			registrationStart,
			registrationEnd,
			isOpen: values.isOpen,
			addressId: values.addressId,
			inviteUrl: values.inviteUrl,
			attendees: values.attendees,
			price: values.price,
			currency: values.currency,
			tickets: values.tickets,
			eventTag: values.eventTag,
		};

		console.log(submitValues);
	};

	const handleCancelOnClick = () => {
		console.log('Canceled');
	};

	return {
		initialValues,
		onSubmit,
		handleCancelOnClick,
		users,
		eventTags,
		selectedTags,
		attendees,
		imageUrl,
		cardUrl,
		parsedAgendaItems,
	};
};

export default EventFormVM;
