import { AttendeeNotification } from "./AttendeeNotification";

export interface Notification {
    attendeeNotifications: AttendeeNotification[];
    totalNotifications: number;
    activeNotifications: number;
}