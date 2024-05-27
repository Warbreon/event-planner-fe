import { Attendee } from '../models/Attendee';

export const filterAttendees = (attendees?: Attendee[]): Attendee[] => {
	if (!attendees) {
		return [];
	}

	return attendees.filter(
		(attendee) =>
			(attendee.registrationStatus === 'ACCEPTED' || attendee.registrationStatus === null) 
		// no payment system...
		// &&(attendee.paymentStatus === 'PAID' || attendee.paymentStatus === null)
	);
};

export const filterAttendeesByRegistationStatusAndFullname = (attendees?: Attendee[]): Attendee[] => {
	if (!attendees) {
		return [];
	}

	const statusOrder: Record<string, number> = { PENDING: -1, ACCEPTED: 0, null: 0, REJECTED: 1 };

	return attendees.sort((a, b) => {
		const statusA = a.registrationStatus || 'ACCEPTED';
		const statusB = b.registrationStatus || 'ACCEPTED';

		const statusSort = (statusOrder[statusA] ?? 0) - (statusOrder[statusB] ?? 0);
		if (statusSort !== 0) {
			return statusSort;
		}

		return a.user.firstName.localeCompare(b.user.firstName) || a.user.lastName.localeCompare(b.user.lastName);
	});
}
