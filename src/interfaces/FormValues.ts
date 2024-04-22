import {Moment} from "moment/moment";
import {Agenda} from "./Agenda";

export interface FormValues {
    imageUrl: File | null;
    eventStartDate: Moment | null;
    eventStartTime: Moment | null;
    eventEndDate: Moment | null;
    eventEndTime: Moment | null;
    eventName: string;
    eventTag: string;
    cardUrl: File | null;
    addressId: number | string | null;
    inviteUrl: string | null;
    agenda: Agenda[] | null;
}