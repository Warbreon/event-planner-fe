export default interface EventDetails {
	name: string;
	description: string;
	agenda: string[] | null;
	attendees: EventAttendee[] | null;
	eventTags: string[] | null;
}

export interface EventAttendee {
	id: number;
	user: AttendeeUser | null;
}

export interface AttendeeUser {
	firstName: string;
	lastName: string;
	jobTitle: string;
	imageUrl: string;
}
