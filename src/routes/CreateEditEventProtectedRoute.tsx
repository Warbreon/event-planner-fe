import { useSelector } from 'react-redux';
import { FC, ReactNode } from 'react';
import ROUTES from './Routes';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
	children: ReactNode;
}

const CreateEditEventProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
	const userRole = useSelector((state: any) => state.user.role);

	if (userRole !== 'SYSTEM_ADMIN' && userRole !== 'EVENT_ADMIN') {
		return <Navigate to={ROUTES.NOT_FOUND}/>;
	}

	return <>{children}</>;
};

export default CreateEditEventProtectedRoute;
