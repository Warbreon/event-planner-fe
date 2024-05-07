import { useState } from 'react';
import { Event } from '../../models/Event';
import { formatDate } from '../../utils/DateConverter';
import useEventAPI from '../../api/EventsAPI';
import { usePost } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const EventCardVM = (event: Partial<Event>) => {
	const { id: eventId, eventStart = '', address, inviteUrl } = event;
	const eventDate = formatDate(eventStart);
	const [isModalOpen, setModalOpen] = useState(false);
	const userEmail = useSelector((state: StoreState) => state.user.email);
	const { postData, isLoading: isRegistrationLoading, error: registrationError, data } = usePost();
	const { registerToEvent } = useEventAPI();

	let location = 'TBD';
	if (inviteUrl && !address) {
		location = 'Online';
	} else if (!inviteUrl && address) {
		location = address.city;
	}

	const getEventUrl = () => {
		return `/events/event/${eventId}`;
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
		isModalOpen,
		getEventUrl,
		onEventRegistrationClick,
		eventDate,
		location,
		handleModalClose,
		registrationError,
		isRegistrationLoading,
	};
};

export default EventCardVM;
