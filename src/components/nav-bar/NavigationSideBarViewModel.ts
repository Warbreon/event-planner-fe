import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/Store';

const NavigationSideBarViewModel = () => {
	const loggedInStatus = useSelector((state: RootState) => state.user.loggedIn);

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
	};
};

export default NavigationSideBarViewModel;
