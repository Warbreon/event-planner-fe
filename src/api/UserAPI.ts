import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { User } from '../models/User';
import { PrivateUser } from '../models/PrivateUser';

const useUserAPI = () => {
	const axios = useAxios();
	const fetchUsers = () => axios.get<User[]>(ENDPOINTS.getAllUsers);
	const fetchAdmins = () => axios.get<PrivateUser[]>(ENDPOINTS.getAllAdmins);
	const demoteAdmins = (ids: (string | number)[]) => {
		return axios.patch(ENDPOINTS.demoteAdmin, { ids });
	};
	return { fetchUsers, fetchAdmins, demoteAdmins };
};
export default useUserAPI;
