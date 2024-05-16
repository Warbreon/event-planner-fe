import { getResetLinkBase } from '../utils/UrlUtils';
import useAxios from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

const useAuthenticationAPI = () => {
	const axios = useAxios();
	const authenticateUser = (email: string, password: string) => axios.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => axios.post(ENDPOINTS.refreshAccessToken, { refreshToken });
	const fetchUserInfo = () => axios.get(ENDPOINTS.getUserInfo);
	const resetPassword = (email: string) => {
		const resetLinkBase = getResetLinkBase();
		return axios.post(ENDPOINTS.resetPassword, { email, resetLinkBase });
	};
	const changePassword = (token: string, newPassword: string) => axios.post(ENDPOINTS.changePassword, { token, newPassword });

	return { authenticateUser, refresh, fetchUserInfo, resetPassword, changePassword };
};
export default useAuthenticationAPI;
