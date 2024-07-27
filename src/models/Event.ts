import { Currency } from '../constants/Currency';
import { REGISTRATION_STATUS } from "./RegistrationStatus";
import { Address } from './Address';
import { Attendee } from './Attendee';
import { Tag } from './Tag';
import { PAYMENT_STATUS } from './PaymentStatus';

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
	currentUserRegistrationStatus: REGISTRATION_STATUS | null;
	currentUserPaymentStatus: PAYMENT_STATUS | null;
	isOpen: boolean;
	tags: Tag[];
	currency: Currency;
	tickets: number;
	isCancelled: boolean;
}
