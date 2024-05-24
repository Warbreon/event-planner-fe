import { Attendee } from '../models/Attendee';

export enum UserRegistrationStatus {
	ACCEPTED = 'ACCEPTED',
	PENDING = 'PENDING',
	REJECTED = 'REJECTED',
}
export const filterAttendees = (attendees?: Attendee[]): Attendee[] => {
	if (!attendees) {
		return [];
	}

	return attendees.filter(
		(attendee) =>
			(attendee.registrationStatus === UserRegistrationStatus.ACCEPTED || attendee.registrationStatus === null) &&
			(attendee.paymentStatus === 'PAID' || attendee.paymentStatus === null)
	);
};

export const filterAttendeesByRegistationStatusAndFullname = (attendees?: Attendee[]): Attendee[] => {
	if (!attendees) {
		return [];
	}

	const statusOrder: Record<string, number> = { PENDING: -1, ACCEPTED: 0, null: 0, REJECTED: 1 };

	return attendees.sort((a, b) => {
		const statusA = a.registrationStatus || UserRegistrationStatus.ACCEPTED;
		const statusB = b.registrationStatus || UserRegistrationStatus.ACCEPTED;

		const statusSort = (statusOrder[statusA] ?? 0) - (statusOrder[statusB] ?? 0);
		if (statusSort !== 0) {
			return statusSort;
		}

		return a.user.firstName.localeCompare(b.user.firstName) || a.user.lastName.localeCompare(b.user.lastName);
	});
}
