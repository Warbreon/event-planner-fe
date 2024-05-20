import { Currency } from "../../constants/Currency";

export interface EventRequest {
    name: string;
    description: string;
    imageBase64: string;
    cardImageBase64: string;
    isOpen: boolean;
    eventStart: string;
    eventEnd: string;
    registrationStart: string;
    registrationEnd: string;
    agenda: string[];
    price: number;
    tickets: number;
    inviteUrl: string;
    attendeeIds: number[];
    addressId: number | null;
    tagIds: number[];
    currency: Currency;
}