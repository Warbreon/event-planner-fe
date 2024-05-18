import ROUTES from './Routes';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useProtectedRouteVM from './ProtectedRouteVM';

interface ProtectedRouteProps {
	children: ReactNode;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const { isUserAuthenticated, isRefreshTokenExpired } = useProtectedRouteVM();

	if (isRefreshTokenExpired || !isUserAuthenticated) {
		return <Navigate to={ROUTES.SIGN_IN} />;
	}
	return <>{children}</>;
};

export default ProtectedRoute;
