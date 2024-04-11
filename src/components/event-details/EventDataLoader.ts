import EventDetails from './EventDetailsInterface';
import mockEvent from './mockEvent.json';

export const loadEvent = (): EventDetails => {
	return mockEvent as EventDetails;
};
