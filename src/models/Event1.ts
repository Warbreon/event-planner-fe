import { Attendee } from './Attendee1';
import { Address } from './Address1';

export interface Event {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	eventStart: Date;
	eventEnd: Date;
	registrationStart: Date;
	registrationEnd: Date;
	agenda: string[] | null;
	price: number;
	inviteUrl: string | null;
	address: Address | null;
	creatorId: number;
	attendees: Attendee[];
	currentUserRegisteredToEvent: boolean;
	open: boolean;
}
