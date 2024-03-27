import React from 'react';

import './PlannerFooter.css';
import LoggedOutFooter from './logged-out-footer/LoggedOutFooter.tsx';
import LoggedInFooter from './logged-in-footer/LoggedInFooter.tsx';
import PlannerFooterViewModel from './PlannerFooterViewModel.ts';

type PlannerFooterProps = {
	loggedIn: boolean;
};

const PlannerFooter: React.FC<PlannerFooterProps> = ({ loggedIn }) => {
	const viewModel = PlannerFooterViewModel();
	return (
		<>
			{loggedIn ? (
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
			)}
		</>
	);
};

export default PlannerFooter;
