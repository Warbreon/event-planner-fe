import { Currency } from '../constants/Currency';
import { Address } from './Address';
import { Attendee } from './Attendee';
import { Tag } from './Tag';

export interface Event {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
	cardImageUrl: string;
	eventStart: string;
	eventEnd: string;
	registrationStart: string;
	registrationEnd: string;
	agenda?: string[] | null;
	price: number;
	inviteUrl?: string | null;
	address?: Address | null;
	creatorId: number;
	attendees?: Attendee[];
	currentUserRegisteredToEvent: boolean;
	isOpen: boolean;
	tags: Tag[];
	currency: Currency;
	tickets: number;
	isCancelled: boolean;
}
