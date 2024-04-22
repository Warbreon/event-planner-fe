import axios from 'axios';

const tempToken =
	'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndXkuaGF3a2luc0BnbWFpbC5jb20iLCJpYXQiOjE3MTM3OTQzODYsImV4cCI6MTcxMzg4MDc4Nn0._R4meTOryF5FEc9A1aRDXzjyJfd3klYl8GQuhcz_1750ia-ON0RNSAtUfTqh1cHjyG5M5NMxhRuoPwVvAzPcQQ';

const API = axios.create({
	baseURL: 'https://raisav-api.devbstaging.com/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${tempToken}`,
	},
});

export default API;
