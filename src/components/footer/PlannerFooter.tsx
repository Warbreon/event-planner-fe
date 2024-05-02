import LoggedOutFooter from './logged-out-footer/LoggedOutFooter';
import LoggedInFooter from './logged-in-footer/LoggedInFooter';
import PlannerFooterViewModel from './PlannerFooterViewModel';

const PlannerFooter = () => {
	const viewModel = PlannerFooterViewModel();
	

	return (
		<>
		<h1>WHERE IS MY FOOTER</h1>
			{/* {viewModel.loggedInStatus ? (
				<LoggedInFooter
					handleClickCognizant={viewModel.handleClickCognizant}
					handleClickPrivacy={viewModel.handleClickPrivacy}
				/>
			) : (
				<LoggedOutFooter
					handleClickCognizant={viewModel.handleClickCognizant}
					handleClickTerms={viewModel.handleClickTerms}
					handleClickSupport={viewModel.handleClickSupport}
				/>
			)} */}
		</>
	);
};

export default PlannerFooter;
