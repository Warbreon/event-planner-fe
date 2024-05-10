import axiosInstance from './axios/AxiosInstance';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAuthenticationAPI = () => {
	const authenticateUser = (email: string, password: string) => axiosInstance.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => axiosInstance.post(ENDPOINTS.refreshAccessToken, { refreshToken });

	return { authenticateUser, refresh };
};
export default useAuthenticationAPI;
