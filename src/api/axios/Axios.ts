import axios from 'axios';
import { extractAccessToken } from '../../utils/schemas/ExtractAccessToken';

export const API_withoutToken = axios.create({
	baseURL: 'https://raisav-api.devbstaging.com/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

const API = axios.create({
	baseURL: 'https://raisav-api.devbstaging.com/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${extractAccessToken()}`,
	},
});

export default API;
