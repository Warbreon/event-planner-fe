import { REGISTRATION_STATUS } from "./RegistrationStatus";
import { User } from "./User";

export interface Attendee {
  id: number;
  registrationStatus?: REGISTRATION_STATUS | null;
  paymentStatus?: string | null;
  user: User;
}
