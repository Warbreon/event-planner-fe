import { ENDPOINTS } from './endpoints/Endpoints';
import { User } from '../models/User';
import axiosInstance from './axios/AxiosInstance';
import { PrivateUser } from '../models/PrivateUser';
import { UserRoles } from '../utils/PermissionParser';


const useUserAPI = () => {
	const fetchUsers = () => axiosInstance.get<User[]>(ENDPOINTS.getUsers);
	const fetchNonAdminUsers = () => axiosInstance.get<User[]>(ENDPOINTS.getUsers, { params: { roles: `${UserRoles.USER}` } });
	const fetchSimpleUsersAndEventAdmins = () => axiosInstance.get<User[]>(ENDPOINTS.getUsers, { params: { roles: `${UserRoles.USER}, ${UserRoles.EVENT_ADMIN}` } });
	const fetchAdmins = () =>
		axiosInstance.get<PrivateUser[]>(ENDPOINTS.getUsers, {
			params: { roles: `${UserRoles.EVENT_ADMIN}, ${UserRoles.SYSTEM_ADMIN}` },
		});
	const demoteAdmins = (adminIds: number[]) => {
		return axiosInstance.patch(ENDPOINTS.demoteAdmins(adminIds));
	};
	const promoteAdmins = (userIds: number[]) => {
		return axiosInstance.patch(ENDPOINTS.promoteAdmins(userIds));
	};
	return { fetchUsers, fetchNonAdminUsers, fetchAdmins, demoteAdmins, promoteAdmins, fetchSimpleUsersAndEventAdmins };
};
export default useUserAPI;
