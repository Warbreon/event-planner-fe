import { getResetLinkBase } from '../utils/UrlUtils';
import axiosInstance from './axios/AxiosInstance';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAuthenticationAPI = () => {
	const authenticateUser = (email: string, password: string) => axiosInstance.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => axiosInstance.post(ENDPOINTS.refreshAccessToken, { refreshToken });
	const fetchUserInfo = () => axiosInstance.get(ENDPOINTS.getUserInfo);
	const resetPassword = (email: string) => {
		const resetLinkBase = getResetLinkBase();
		return axios.post(ENDPOINTS.resetPassword, { email, resetLinkBase });
	};
	const changePassword = (token: string, newPassword: string) => axios.post(ENDPOINTS.changePassword, { token, newPassword });
	return { authenticateUser, refresh, fetchUserInfo, resetPassword, changePassword };
};
export default useAuthenticationAPI;
