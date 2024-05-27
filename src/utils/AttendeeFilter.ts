import { Attendee } from '../models/Attendee';
import {REGISTRATION_STATUS} from "../models/RegistrationStatus";

export const filterAttendees = (attendees?: Attendee[]): Attendee[] => {
	if (!attendees) {
		return [];
	}

	return attendees.filter(
		(attendee) =>
			(attendee.registrationStatus === REGISTRATION_STATUS.ACCEPTED || attendee.registrationStatus === null)
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
		const statusA = a.registrationStatus || REGISTRATION_STATUS.ACCEPTED;
		const statusB = b.registrationStatus || REGISTRATION_STATUS.ACCEPTED;

		const statusSort = (statusOrder[statusA] ?? 0) - (statusOrder[statusB] ?? 0);
		if (statusSort !== 0) {
			return statusSort;
		}

		return a.user.firstName.localeCompare(b.user.firstName) || a.user.lastName.localeCompare(b.user.lastName);
	});
}
