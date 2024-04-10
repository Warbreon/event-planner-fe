import { User } from "./User";

export interface Attendee {
  id: number;
  registrationStatus: string | null;
  paymentStatus: string | null;
  user: User
}