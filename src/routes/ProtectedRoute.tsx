import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../redux/store/PersistentStore';
import { Navigate, useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import { RefreshTokenRequest } from '../api/Authentication';
import { refreshAccessToken, signOut } from '../redux/slices/UserSlice';
import ROUTES from './Routes';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const user = useSelector((state: PersistentStoreRootState) => state.signedIn);
	const navigate = useNavigate();
	const currectAccessToken = useSelector((state: PersistentStoreRootState) => state.accessToken);
	const refreshToken = useSelector((state: PersistentStoreRootState) => state.refreshToken);
	const dispatch = useDispatch();
	const isAccessTokenExpired = isExpired(currectAccessToken);
	const isRefreshTokenExpired = isExpired(refreshToken);

	const { refresh } = RefreshTokenRequest(refreshToken);
	useEffect(() => {
		const fetchNewAccessToken = async () => {
			console.log(
				`requested new token. is access token expired: ${isAccessTokenExpired}. is refresh token expired: ${isRefreshTokenExpired}`
			);
			if (isAccessTokenExpired && !isRefreshTokenExpired) {
				console.log(`requesting refresh, token expired ${currectAccessToken}`);
				const { accessToken, error } = await refresh();
				if (!error && accessToken) {
					dispatch(refreshAccessToken(accessToken));
					console.log(`dispaching new token: ${accessToken}`);
				}
			}
		};

		if (isAccessTokenExpired && !isRefreshTokenExpired) {
			fetchNewAccessToken();
		}
	}, [currectAccessToken, dispatch, isAccessTokenExpired, isRefreshTokenExpired, refresh]);

	useEffect(() => {
		if (isRefreshTokenExpired) {
			dispatch(signOut());
			navigate(ROUTES.SIGN_IN, { replace: true });
		}
	}, [navigate, isRefreshTokenExpired, dispatch]);

	if (!user) {
		return <Navigate to={ROUTES.SIGN_IN} />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
