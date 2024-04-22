import axios from 'axios';
import { authentication, refreshAccessToken } from './Endpoints';

export const AuthenticationRequest = () => {
	const authenticate = async (email: string, password: string) => {
		try {
			const response = await axios.post(authentication, { email, password });
			if (response.status === 200) {
				const { accessToken, refreshToken, email, role } = response.data;
				return { accessToken, refreshToken, email, role };
			}
		} catch (error: any) {
			return error;
		}
	};
	return { authenticate };
};

export const RefreshTokenRequest = (refreshToken: string) => {
	const refresh = async () => {
		try {
			const response = await axios.post(refreshAccessToken, { refreshToken });
			if (response.status === 200) {
				const { accessToken } = response.data;
				return { accessToken };
			}
		} catch (error: any) {
			return error;
		}
	};
	return { refresh };
};
