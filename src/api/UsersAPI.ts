import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { PrivateUser } from '../models/PrivateUser';

const useUserAPI = () => {
	const axios = useAxios();
	const fetchAdmins = () => axios.get<PrivateUser[]>(ENDPOINTS.getAllAdmins);
	const demoteAdmin = (id: number | string) => axios.patch(ENDPOINTS.demoteAdmin(id));

	return { fetchAdmins, demoteAdmin };
};
export default useUserAPI;
