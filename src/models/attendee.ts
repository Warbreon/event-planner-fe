import { User } from "./user";

export interface Attendee {
  id: number;
  registrationStatus: string | null;
  paymentStatus: string | null;
  user: User
}