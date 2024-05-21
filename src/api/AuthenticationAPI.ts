import axiosInstance from './axios/AxiosInstance';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAuthenticationAPI = () => {
	const authenticateUser = (email: string, password: string) => axiosInstance.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => axiosInstance.post(ENDPOINTS.refreshAccessToken, { refreshToken });
	const fetchUserInfo = () => axiosInstance.get(ENDPOINTS.getUserInfo);
	return { authenticateUser, refresh, fetchUserInfo };
};
export default useAuthenticationAPI;
