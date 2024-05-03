import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const NavigationSideBarViewModel = () => {
	const loggedInStatus = useSelector((state: StoreState) => state.user.signedIn);

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
