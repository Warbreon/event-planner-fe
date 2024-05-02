import axios from 'axios';
import { useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../../redux/store/PersistentStore';
import { isExpired } from 'react-jwt';

const useAxios = () => {
	const accessToken = useSelector((state: PersistentStoreRootState) => state.accessToken);
	const isTokenExpired = isExpired(accessToken);

	const requestHeaders = {
		'Content-Type': 'application/json',
		...(accessToken !== '' && !isTokenExpired && { Authorization: `Bearer ${accessToken}` }),
	};

	return axios.create({
		baseURL: 'http://localhost:8080/api',
		headers: requestHeaders,
	});
};

export default useAxios;
