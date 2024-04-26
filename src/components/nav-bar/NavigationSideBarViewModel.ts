import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../../redux/store/PersistentStore';

const NavigationSideBarViewModel = () => {
	const loggedInStatus = useSelector((state: PersistentStoreRootState) => state.signedIn);

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
