import ROUTES from './Routes';
import { StoreState } from '../redux/store/Store';
import { useSelector } from 'react-redux';
import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import useProtectedRouteVM from './ProtectedRouteVM';
import { UserRoles } from '../utils/PermissionParser';

interface AdminRouteProps {
	children: ReactNode;
}

const AdminRoute: FC<AdminRouteProps> = ({ children }) => {
	const { isUserAuthenticated } = useProtectedRouteVM();
	const role = useSelector((state: StoreState) => state.user.role);

	if (!isUserAuthenticated || (role !== UserRoles.SYSTEM_ADMIN && role !== UserRoles.EVENT_ADMIN)) {
		return <Navigate to={ROUTES.INDEX} />;
	}

	return <>{children}</>;
};

export default AdminRoute;
