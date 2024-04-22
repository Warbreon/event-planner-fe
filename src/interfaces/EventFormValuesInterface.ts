import { Moment } from "moment";

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
}