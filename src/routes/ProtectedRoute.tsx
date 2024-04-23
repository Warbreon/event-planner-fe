import ROUTES from './Routes';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../redux/store/PersistentStore';
import { Navigate, useNavigate } from 'react-router-dom';
import { isExpired } from 'react-jwt';
import { refreshAccessToken, signOut } from '../redux/slices/UserSlice';
import { usePost } from '../api/hooks/ApiHooks';
import { refresh } from '../api/AuthenticationAPI';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const isUserAuthenticated = useSelector((state: PersistentStoreRootState) => state.signedIn);
	const currectAccessToken = useSelector((state: PersistentStoreRootState) => state.accessToken);
	const refreshToken = useSelector((state: PersistentStoreRootState) => state.refreshToken);
	const isAccessTokenExpired = isExpired(currectAccessToken);
	const isRefreshTokenExpired = isExpired(refreshToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { postData } = usePost();
	useEffect(() => {
		const fetchNewAccessToken = async () => {
			if (isAccessTokenExpired && !isRefreshTokenExpired) {
				const { accessToken, error } = await postData(() => refresh(refreshToken));
				if (!error && accessToken !== null) {
					dispatch(refreshAccessToken(accessToken));
				}
			}
		};

		if (isAccessTokenExpired && !isRefreshTokenExpired) {
			fetchNewAccessToken();
		}
	}, [currectAccessToken, dispatch, isAccessTokenExpired, isRefreshTokenExpired, postData, refreshToken]);

	useEffect(() => {
		if (isRefreshTokenExpired) {
			dispatch(signOut());
			navigate(ROUTES.SIGN_IN, { replace: true });
		}
	}, [navigate, isRefreshTokenExpired, dispatch]);

	if (!isUserAuthenticated) {
		return <Navigate to={ROUTES.SIGN_IN} />;
	}

	return <>{children}</>;
};

export default ProtectedRoute;
