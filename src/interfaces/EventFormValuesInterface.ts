import { Moment } from "moment";
import { Agenda } from "./Agenda";
import { Currency } from "../constants/Currency";

export interface EventFormValues {
    imageBase64: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    eventName: string;
    eventTagIds: number[];
    cardImageBase64: File | null;
    isOpen: boolean;
    registrationStartDate: Moment | null;
    registrationStartTime: Moment | null;
    registrationEndDate: Moment | null;
    registrationEndTime: Moment | null;
    agenda: Agenda[] | null;
    addressId: number | null;
    inviteUrl: string | null;
    locationKey: number;
    attendeeIds: number[];
    currency: Currency;
    price: number;
    tickets: number;
    description: string;
}