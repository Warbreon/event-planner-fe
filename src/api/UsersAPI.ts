import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { Admin } from '../models/Admin';

const useUserAPI = () => {
	const axios = useAxios();
	const fetchAdmins = () => axios.get<Admin[]>(ENDPOINTS.getAllAdmins);
	const demoteAdmin = (id: number | string) => axios.patch(ENDPOINTS.demoteAdmin(id));

	return { fetchAdmins, demoteAdmin };
};
export default useUserAPI;
