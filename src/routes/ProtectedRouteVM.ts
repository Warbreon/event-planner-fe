import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreState } from '../redux/store/Store';
import { isExpired } from 'react-jwt';
import { useApiRequest } from '../api/hooks/ApiHooks';
import { useNavigate } from 'react-router';
import { refreshAccessToken, signOut } from '../redux/slices/AuthenticationSlice';
import { useEffect, useState } from 'react';
import useAuthenticationAPI from '../api/AuthenticationAPI';
import ROUTES from './Routes';
import { removeUserInfo } from '../redux/slices/UserInfoSlice';

const useProtectedRouteVM = () => {
	const isUserAuthenticated = useSelector((state: StoreState) => state.user.signedIn);
	const currentAccessToken = useSelector((state: StoreState) => state.user.accessToken);
	const refreshToken = useSelector((state: StoreState) => state.user.refreshToken);

	const isAccessTokenExpired = isExpired(currentAccessToken);
	const isRefreshTokenExpired = isExpired(refreshToken);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { refresh } = useAuthenticationAPI();
	const { request: postData, data, error, isLoading } = useApiRequest();

	const [fetchingNewToken, setFetchingNewToken] = useState(false);

	useEffect(() => {
		const fetchNewAccessToken = async () => {
			setFetchingNewToken(true)
		 await postData(() => refresh(refreshToken));
		 setFetchingNewToken(false)
		};

		if (isAccessTokenExpired && !isRefreshTokenExpired) {
			fetchNewAccessToken();
		}


		if(!isLoading && !fetchingNewToken) {
			if(data && data.accessToken !== null) {
				console.log(data.accessToken)
				dispatch(refreshAccessToken(data.accessToken));
			}
		}

		
		if (isRefreshTokenExpired) {
			dispatch(signOut());
			dispatch(removeUserInfo());
			navigate(ROUTES.SIGN_IN, { replace: true });
		}
	}, [data, dispatch, error, fetchingNewToken, isAccessTokenExpired, isLoading, isRefreshTokenExpired, navigate, postData, refresh, refreshToken]);

	return { isUserAuthenticated, isRefreshTokenExpired, isLoading};
};

export default useProtectedRouteVM;
