import axios from 'axios';
import { store } from '../../redux/store/Store';
import { isExpired } from 'react-jwt';

const axiosInstance = axios.create({
    baseURL: 'https://raisav-api.devbstaging.com/api',
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

export default axiosInstance;
