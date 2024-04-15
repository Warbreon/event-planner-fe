import { Moment } from "moment";

export interface Agenda {
    time: string | Moment;
    description: string;
}