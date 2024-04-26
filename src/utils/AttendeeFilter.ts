import { Attendee } from '../models/Attendee';

export const filterAttendees = (attendees?: Attendee[]): Attendee[] => {
	if (!attendees) {
		return [];
	}

	return attendees.filter(
		(attendee) =>
			(attendee.registrationStatus === 'ACCEPTED' || attendee.registrationStatus === null) &&
			(attendee.paymentStatus === 'PAID' || attendee.paymentStatus === null)
	);
};
