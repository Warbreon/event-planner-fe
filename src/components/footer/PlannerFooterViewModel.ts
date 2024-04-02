import { useNavigate } from 'react-router';
import routes from '../../routes/routes.ts';

const PlannerFooterViewModel = () => {
	const navigate = useNavigate();

	const handleClickCognizant = () => {
		navigate(routes.INDEX);
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
	};
};

export default PlannerFooterViewModel;
