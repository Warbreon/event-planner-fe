import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../redux/store/Store';
import { isExpired } from 'react-jwt';
import { useApiRequest } from '../api/hooks/ApiHooks';
import { useNavigate } from 'react-router';
import { refreshAccessToken, signOut } from '../redux/slices/AuthenticationSlice';
import { useEffect } from 'react';
import useAuthenticationAPI from '../api/AuthenticationAPI';
import ROUTES from './Routes';

const useProtectedRouteVM = () => {
	const isUserAuthenticated = useSelector((state: StoreState) => state.user.signedIn);
	const currentAccessToken = useSelector((state: StoreState) => state.user.accessToken);
	const refreshToken = useSelector((state: StoreState) => state.user.refreshToken);

	const isAccessTokenExpired = isExpired(currentAccessToken);
	const isRefreshTokenExpired = isExpired(refreshToken);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { refresh } = useAuthenticationAPI();
	const { requestData: postData } = useApiRequest();

	useEffect(() => {
		const fetchNewAccessToken = async () => {
			const { accessToken, error } = await postData(() => refresh(refreshToken));
			if (!error && accessToken !== null) {
				dispatch(refreshAccessToken(accessToken));
			}
		};

		if (isAccessTokenExpired && !isRefreshTokenExpired) {
			fetchNewAccessToken();
		}

		if (isRefreshTokenExpired) {
			dispatch(signOut());
			navigate(ROUTES.SIGN_IN, { replace: true });
		}
	}, [
		currentAccessToken,
		dispatch,
		isAccessTokenExpired,
		isRefreshTokenExpired,
		navigate,
		postData,
		refresh,
		refreshToken,
	]);

	return { isUserAuthenticated };
};

export default useProtectedRouteVM;
