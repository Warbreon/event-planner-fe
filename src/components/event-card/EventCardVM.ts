import { Event } from '../../models/Event';
import { formatDate } from '../../utils/DateConverter';
import useRegistration from '../../hooks/UseRegistration';

const EventCardVM = (event: Partial<Event>) => {
	const { id: eventId, eventStart = '', address, inviteUrl, currentUserRegistrationStatus, isOpen } = event;
	const eventDate = formatDate(eventStart);

	const { isModalOpen, isLoading, error, registrationStatus, register, closeModal } = useRegistration({
        eventId: Number(eventId),
        initialRegistrationStatus: currentUserRegistrationStatus ?? null,
		isEventOpen: Boolean(isOpen),
    });

	let location = 'TBD';
	if (inviteUrl && !address) {
		location = 'Online';
	} else if (!inviteUrl && address) {
		location = address.city;
	}

	const getEventUrl = () => `/events/event/${eventId}`;

	const onEventRegistrationClick = async () => {
        await register();
    };

	return {
		isModalOpen,
		getEventUrl,
		onEventRegistrationClick,
		eventDate,
		location,
		closeModal,
		registrationError: error,
		isRegistrationLoading: isLoading,
		registrationStatus,
	};
};

export default EventCardVM;
