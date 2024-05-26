import { useSelector } from 'react-redux';
import { StoreState } from '../redux/store/Store';
import { isExpired } from 'react-jwt';

const useProtectedRouteVM = () => {
	const isUserAuthenticated = useSelector((state: StoreState) => state.user.signedIn);
	const userRole = useSelector((state: any) => state.user.role);
	const refreshToken = useSelector((state: StoreState) => state.user.refreshToken);
	const isRefreshTokenExpired = isExpired(refreshToken);

	return { isUserAuthenticated, userRole, isRefreshTokenExpired};
};

export default useProtectedRouteVM;
