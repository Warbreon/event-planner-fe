import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { User } from '../models/User';
import { PrivateUser } from '../models/PrivateUser';
import { UserRoles } from '../utils/PermissionParser';

const useUserAPI = () => {
	const axios = useAxios();
	const fetchUsers = () => axios.get<User[]>(ENDPOINTS.getUsers);
	const fetchNonAdminUsers = () => axios.get<User[]>(ENDPOINTS.getUsers, {params: { roles: `${UserRoles.USER}`}});
	const fetchAdmins = () => axios.get<PrivateUser[]>(ENDPOINTS.getUsers, {params: { roles: `${UserRoles.EVENT_ADMIN}, ${UserRoles.SYSTEM_ADMIN}`}});
	const demoteAdmins = (adminIds: (string | number)[]) => {
		return axios.patch(ENDPOINTS.demoteAdmins(adminIds));
	};
	const promoteAdmins = (userIds: (string | number)[]) => {
		return axios.patch(ENDPOINTS.promoteAdmins(userIds));
	};
	return { fetchUsers, fetchNonAdminUsers, fetchAdmins, demoteAdmins, promoteAdmins };
};
export default useUserAPI;
