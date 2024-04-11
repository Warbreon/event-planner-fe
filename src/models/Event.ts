import { Address } from "./Address";
import { Attendee } from "./Attendee";

export interface Event {
	id: number;
	name?: string;
	description?: string;
	imageUrl?: string;
	eventStart?: string;
	eventEnd?: string;
	registrationStart?: string;
	registrationEnd?: string;
	agenda?: string[] | null;
	price?: number | null;
	inviteUrl?: string | null;
	address?: Address | null;
	creatorId?: number;
	attendees?: Attendee[];
	currentUserRegisteredToEvent?: boolean;
	open?: boolean;
}