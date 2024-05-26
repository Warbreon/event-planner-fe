import ROUTES from './Routes';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useProtectedRouteVM from './ProtectedRouteVM';
import { UserRoles } from '../utils/PermissionParser';

interface SystemAdminRouteProps {
	children: ReactNode;
}

const SystemAdminRoute: FC<SystemAdminRouteProps> = ({ children }) => {
	const { isUserAuthenticated, userRole } = useProtectedRouteVM();

	if (isUserAuthenticated && userRole !== UserRoles.SYSTEM_ADMIN) {
		return <Navigate to={ROUTES.NOT_FOUND}/>;
	}

	return <>{children}</>;
};

export default SystemAdminRoute;
