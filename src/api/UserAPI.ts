import { ENDPOINTS } from './endpoints/Endpoints';
import useAxios from './axios/Axios';
import { User } from '../models/User';

const useUserAPI = () => {
	const axios = useAxios();
	const fetchUsers = () => axios.get<User[]>(ENDPOINTS.getAllUsers);
	return { fetchUsers };
};
export default useUserAPI;
