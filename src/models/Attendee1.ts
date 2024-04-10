import { User } from "./User1";

export interface Attendee {
  id: number;
  registrationStatus: string | null;
  paymentStatus: string | null;
  user: User
}