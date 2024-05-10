import useAxios from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAuthenticationAPI = () => {
	const axios = useAxios();
	const authenticateUser = (email: string, password: string) => axios.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => axios.post(ENDPOINTS.refreshAccessToken, { refreshToken });
	const fetchUserInfo = () => axios.get(ENDPOINTS.getUserInfo);

	return { authenticateUser, refresh, fetchUserInfo };
};
export default useAuthenticationAPI;
