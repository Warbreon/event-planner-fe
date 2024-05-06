import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { UserRoles } from '../../utils/PermissionParser';

const NavigationSideBarViewModel = () => {
	const loggedInStatus = useSelector((state: StoreState) => state.user.signedIn);

	const userRole = useSelector((state: StoreState) => state.user.role);
	const isUserAdmin = userRole === UserRoles.SYSTEM_ADMIN;

	const currentRoute = useLocation().pathname;

	const navigate = useNavigate();

	const handleClickOnNavButton = (navigationRoute: string) => {
		if (currentRoute !== navigationRoute) {
			navigate(navigationRoute);
		}
	};

	return {
		currentRoute,
		handleClickOnNavButton,
		loggedInStatus,
		isUserAdmin,
	};
};

export default NavigationSideBarViewModel;
