import axios from 'axios';

const API = axios.create({
	baseURL: 'https://raisav-api.devbstaging.com/api',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default API;
