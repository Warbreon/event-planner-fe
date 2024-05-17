import ROUTES from './Routes';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useProtectedRouteVM from './ProtectedRouteVM';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const { isUserAuthenticated, isRefreshTokenExpired, isLoading } = useProtectedRouteVM();

	if (!isUserAuthenticated) {
		return <Navigate to={ROUTES.SIGN_IN} />;
	}

	if(isRefreshTokenExpired) {
		return <Navigate to={ROUTES.SIGN_IN} />;
	}

	if(isLoading) {
		return <LoadingIndicator/>
	}

	return <>{children}</>;
};

export default ProtectedRoute;
