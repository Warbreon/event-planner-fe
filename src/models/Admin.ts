import { UserRoles } from '../utils/PermissionParser';
import { User } from './User';

export interface Admin extends User {
	role: UserRoles;
}
