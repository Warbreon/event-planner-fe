import { EventFormValues } from '../../../interfaces/EventFormValuesInterface';
import { useApiRequest } from '../../../api/hooks/ApiHooks';
import { useEffect } from 'react';
import { LocationTags } from '../../../constants/LocationTags';
import { mapEventFormValuesToEvent, mapEventToFormValues } from '../../../utils/mappings/EventMappings';
import useEventAPI from '../../../api/EventsAPI';
import { useNavigate } from 'react-router';
import { Currency } from '../../../constants/Currency';
import ROUTES from '../../../routes/Routes';
import { Event } from '../../../models/Event';
import { saveFetchedAttendee } from '../../../redux/slices/EditEventSlice';
import { useDispatch } from 'react-redux';
import { User } from '../../../models/User';

const EventFormVM = (eventToEdit: Event | null) => {
	const { request, isLoading: isSubmitting, error: submitError, data: event } = useApiRequest();
	const { createEvent, editEvent } = useEventAPI();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const eventToEditFormValues = mapEventToFormValues(eventToEdit);

	useEffect(() => {
		const attendingUsers: User[] = eventToEdit?.attendees?.map((attendee) => attendee.user) || [];
		dispatch(saveFetchedAttendee(attendingUsers));
	}, [dispatch, eventToEdit?.attendees]);

	const initialValues: EventFormValues = !eventToEdit ? 
	{
				imageBase64: null,
				eventStartDate: null,
				eventStartTime: null,
				eventEndDate: null,
				eventEndTime: null,
				eventName: '',
				description: '',
				eventTagIds: [],
				cardImageBase64: null,
				addressId: null,
				inviteUrl: '',
				agenda: [],
				isOpen: true,
				registrationStartDate: null,
				registrationStartTime: null,
				registrationEndDate: null,
				registrationEndTime: null,
				attendeeIds: [],
				locationKey: LocationTags.PHYSICAL,
				currency: Currency.EUR,
				price: 0,
				tickets: 0,
	} : eventToEditFormValues;

	const onSubmit = async (formValues: EventFormValues) => {
		const eventValues = await mapEventFormValuesToEvent(formValues);
		if (eventToEdit === null) {
			await request(() => createEvent(eventValues));
		} else {
			await request(() => editEvent(eventToEdit.id, eventValues));
		}
	};

	const handleCancelOnClick = () => {
		navigate(ROUTES.MY_EVENTS);
	};

	useEffect(() => {
		if (!isSubmitting && !submitError && event) {
			navigate(ROUTES.EVENT.replace(':eventId', event.id));
		}
	}, [isSubmitting, submitError, event, navigate]);

	return {
		initialValues,
		onSubmit,
		handleCancelOnClick,
		isSubmitting,
		submitError
	};
};

export default EventFormVM;
