import AxiosHook from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

const AuthenticationHook = () => {
	const { API } = AxiosHook();
	const authenticateUser = (email: string, password: string) => API.post(ENDPOINTS.authenticate, { email, password });
	const refresh = (refreshToken: string) => API.post(ENDPOINTS.refreshAccessToken, { refreshToken });

	return { authenticateUser, refresh };
};
export default AuthenticationHook;
