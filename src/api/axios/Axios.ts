import axios from 'axios';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { isExpired } from 'react-jwt';

const useAxios = () => {
	const accessToken = useSelector((state: StoreState) => state.user.accessToken);
	const isTokenExpired = isExpired(accessToken);

	const requestHeaders = {
		'Content-Type': 'application/json',
		...(accessToken !== '' && !isTokenExpired && { Authorization: `Bearer ${accessToken}` }),
	};

	return axios.create({
		baseURL: 'https://raisav-api.devbstaging.com/api',
		headers: requestHeaders,
	});
};

export default useAxios;
