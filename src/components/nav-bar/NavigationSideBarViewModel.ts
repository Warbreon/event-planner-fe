import { useLocation, useNavigate } from 'react-router';

const NavigationSideBarViewModel = () => {
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
	};
};

export default NavigationSideBarViewModel;
