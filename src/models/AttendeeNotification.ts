import { User } from "./User";

export interface AttendeeNotification {
    id: number;
    registrationStatus?: string | null;
    paymentStatus?: string | null;
    registrationTime: string;
    isNewNotification: boolean;
    user: User;
    eventId: number;
    eventName: string;
    eventStart: string;
}