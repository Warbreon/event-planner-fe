import { ENDPOINTS } from './endpoints/Endpoints';
import { PrivateUser } from '../models/PrivateUser';
import axiosInstance from './axios/AxiosInstance';

const useUserAPI = () => {
	const fetchAdmins = () => axiosInstance.get<PrivateUser[]>(ENDPOINTS.getAllAdmins);
	const demoteAdmin = (id: number | string) => axiosInstance.patch(ENDPOINTS.demoteAdmin(id));

	return { fetchAdmins, demoteAdmin };
};
export default useUserAPI;
