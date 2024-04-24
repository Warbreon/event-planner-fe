import axios from 'axios';

const tempToken =
	'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndXkuaGF3a2luc0BnbWFpbC5jb20iLCJpYXQiOjE3MTM4ODU2OTEsImV4cCI6MTcxMzk3MjA5MX0.hkGEzfbTxt5ysK6RJtgW3g5zYWDBTxtpaCftIDAux5TfxZtGnzPMX4GaS5pn25TM0h-4at4i2oUD-yJ0fEeG_Q';

const API = axios.create({
	baseURL: 'https://raisav-api.devbstaging.com/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${tempToken}`,
	},
});

export default API;
