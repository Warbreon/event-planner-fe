import useAxios from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAuthenticationAPI = () => {
	const axios = useAxios();
	const authenticateUser = (email: string, password: string) => axios.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => axios.post(ENDPOINTS.refreshAccessToken, { refreshToken });

	return { authenticateUser, refresh };
};
export default useAuthenticationAPI;
