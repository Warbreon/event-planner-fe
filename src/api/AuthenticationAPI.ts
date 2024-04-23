import { API_withoutToken } from './axios/Axios';
import { ENDPOINTS } from './endpoints/Endpoints';

export const authenticateUser = (email: string, password: string) =>
	API_withoutToken.post(ENDPOINTS.authenticate, { email, password });

export const refresh = (refreshToken: string) => 
  API_withoutToken.post(ENDPOINTS.refreshAccessToken, { refreshToken });
