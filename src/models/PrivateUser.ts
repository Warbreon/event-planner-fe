import { UserRoles } from '../utils/PermissionParser';
import { User } from './User';

export interface PrivateUser extends User {
	role: UserRoles;
	city: string | null;
	country: string | null;
}
