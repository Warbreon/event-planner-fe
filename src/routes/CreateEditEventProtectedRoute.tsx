import { FC, ReactNode } from 'react';
import ROUTES from './Routes';
import { Navigate } from 'react-router-dom';
import { UserRoles } from '../utils/PermissionParser';
import useProtectedRouteVM from './ProtectedRouteVM';

interface ProtectedRouteProps {
	children: ReactNode;
}

const CreateEditEventProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const { isUserAuthenticated, userRole } = useProtectedRouteVM();

	if (userRole !== UserRoles.SYSTEM_ADMIN && userRole !== UserRoles.EVENT_ADMIN && isUserAuthenticated) {
		return <Navigate to={ROUTES.NOT_FOUND}/>;
	} 

	return <>{children}</>;
};

export default CreateEditEventProtectedRoute;
