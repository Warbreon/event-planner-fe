import { ENDPOINTS } from './endpoints/Endpoints';
import { User } from '../models/User';
import axiosInstance from './axios/AxiosInstance';

const useUserAPI = () => {
	const fetchUsers = () => axiosInstance.get<User[]>(ENDPOINTS.getAllUsers);
	return { fetchUsers };
};
export default useUserAPI;
