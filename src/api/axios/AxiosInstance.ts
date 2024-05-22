import axios from 'axios';
import { store } from '../../redux/store/Store';
import { isExpired } from 'react-jwt';
import { refreshAccessToken, signOut } from '../../redux/slices/AuthenticationSlice';
import { removeUserInfo } from '../../redux/slices/UserInfoSlice';
import { ENDPOINTS } from '../endpoints/Endpoints';
import { BASE_API_URL } from '../../constants/ApiConfig';

const axiosInstance = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const state = store.getState();
    const { accessToken } = state.user;

    if (accessToken && accessToken !== '' && !isExpired(accessToken)) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
	
    return config;
}, error => Promise.reject(error));

let isRefreshing = false;
let refreshSubscribers: any[] = [];

const onRefreshed = (token: string) => {
    refreshSubscribers.map(callback => callback(token));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback: (token: string) => void) => {
    refreshSubscribers.push(callback);
};


axiosInstance.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    const { config, response } = error;
    const state = store.getState();
    const { refreshToken } = state.user;

    if (response.status === 401 || isExpired(refreshToken)) {
        store.dispatch(signOut());
        store.dispatch(removeUserInfo());
        return Promise.reject(error);
    }

    if (isRefreshing) {
        return new Promise((resolve) => {
            addRefreshSubscriber((token: string) => {
                config.headers['Authorization'] = `Bearer ${token}`;
                resolve(axios(config));
            });
        });
    }

    isRefreshing = true;

    try {
        const response = await axiosInstance.post(ENDPOINTS.refreshAccessToken, { refreshToken });
        const newAccessToken = response.data.accessToken;

        store.dispatch(refreshAccessToken(newAccessToken));
        onRefreshed(newAccessToken);

        config.headers['Authorization'] = `Bearer ${newAccessToken}`;
        return axios(config);
    } catch (err) {
        store.dispatch(signOut());
        store.dispatch(removeUserInfo());
        return Promise.reject(err);
    } finally {
        isRefreshing = false;
    }
});

export default axiosInstance;
