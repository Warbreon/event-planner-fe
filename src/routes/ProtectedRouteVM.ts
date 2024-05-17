import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreState } from '../redux/store/Store';
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

	const dispatch: AppDispatch = useDispatch();
	const navigate = useNavigate();

	const { refresh } = useAuthenticationAPI();
	const { request: postData, data, error } = useApiRequest();



	useEffect(() => {
		const fetchNewAccessToken = async () => {
			 await postData(() => refresh(refreshToken));
			if (!error && data.accessToken !== null) {
				dispatch(refreshAccessToken(data.accessToken));
			}
		};

		if (isAccessTokenExpired && !isRefreshTokenExpired) {
			fetchNewAccessToken();
		}

		if (isRefreshTokenExpired) {
			dispatch(signOut());
			navigate(ROUTES.SIGN_IN, { replace: true });
		}
	}, [currentAccessToken, data.accessToken, dispatch, error, isAccessTokenExpired, isRefreshTokenExpired, navigate, postData, refresh, refreshToken]);

	return { isUserAuthenticated };
};

export default useProtectedRouteVM;
