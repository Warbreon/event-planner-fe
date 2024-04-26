import { useNavigate } from 'react-router';
import routes from '../../routes/Routes';
import { useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../../redux/store/PersistentStore';

const PlannerFooterViewModel = () => {
	const loggedInStatus = useSelector((state: PersistentStoreRootState) => state.signedIn);

	const navigate = useNavigate();

	const handleClickCognizant = () => {
		window.location.href = 'https://www.cognizant.com/lt/en';
	};

	const handleClickPrivacy = () => {
		navigate(routes.PRIVACY_POLICY);
	};

	const handleClickTerms = () => {
		navigate(routes.TERMS_OF_SERVICE);
	};

	const handleClickSupport = () => {
		navigate(routes.SUPPORT);
	};

	return {
		handleClickCognizant,
		handleClickPrivacy,
		handleClickTerms,
		handleClickSupport,
		loggedInStatus,
	};
};

export default PlannerFooterViewModel;
