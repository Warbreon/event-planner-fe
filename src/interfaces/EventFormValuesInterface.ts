import { Moment } from "moment";
import { Agenda } from "./Agenda";

export interface EventFormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    eventName: string;
    eventTag: string;
    cardUrl: File | null;
    isOpen: boolean;
    registrationStartDate: Moment | null;
    registrationStartTime: Moment | null;
    registrationEndDate: Moment | null;
    registrationEndTime: Moment | null;
    agenda: Agenda[] | null;
}