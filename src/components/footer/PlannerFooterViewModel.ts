const PlannerFooterViewModel = () => {
	const handleClickCognizant = () => {
		console.log('Redirecting to Cognizant website');
	};

	const handleClickPrivacy = () => {
		console.log('Redirecting to Privacy policy');
	};

	const handleClickTerms = () => {
		console.log('Redirecting to Terms of service');
	};

	const handleClickSupport = () => {
		console.log('Redirecting to support');
	};

	return {
		handleClickCognizant,
		handleClickPrivacy,
		handleClickTerms,
		handleClickSupport,
	};
};

export default PlannerFooterViewModel;
