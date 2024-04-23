import axios from 'axios';
import { useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../../redux/store/PersistentStore';
import { isExpired } from 'react-jwt';

const AxiosHook = () => {
	const accessToken = useSelector((state: PersistentStoreRootState) => state.accessToken);
	const isTokenExpired = isExpired(accessToken);
	
	const requestHeaders = {
		'Content-Type': 'application/json',
		...((accessToken !== '' && !isTokenExpired) && { Authorization: `Bearer ${accessToken}` }),
	};

	const API = axios.create({
		baseURL: 'https://raisav-api.devbstaging.com/api',
		headers: requestHeaders,
	});

	return { API };
};

export default AxiosHook;
