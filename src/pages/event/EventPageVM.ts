import { event1 as event } from '../../mocks/EventMocks';
import { calculateDuration, formatDate, formatTime } from '../../utils/DateConverter';


const EventPageVM = () => {
	const {  eventStart, eventEnd, inviteUrl, address} = event;
	const eventDate = formatDate(eventStart).toString();
	const startTime = formatTime(eventStart);
	const endTime = formatTime(eventEnd);
	const duration = calculateDuration(eventStart, eventEnd);
	
	let location;
	if (inviteUrl && !address) {
		location = 'Online';
	} else if (!inviteUrl && address) {
		location = address.city;
	} else {
		location = 'TBD';
	}




	//get event from useNavigate props

	const onAddGuestsClick = () => {
		console.log('Add guest');
	};

	const onEventRegistrationClick = () => {
		console.log('Registed/Get tickets/ Cancel registration');
	};

	return { onAddGuestsClick, onEventRegistrationClick, event, location, eventDate,  startTime ,endTime, duration};
};

export default EventPageVM;
