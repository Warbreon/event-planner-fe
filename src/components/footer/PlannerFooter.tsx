import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import './PlannerFooter.css';

type PlannerFooterProps = {
	loggedIn: boolean;
};

const PlannerFooter: React.FC<PlannerFooterProps> = ({ loggedIn }) => {
	return (
		<div className='footer'>
			{!loggedIn ? (
				<BottomNavigation showLabels>
					<BottomNavigationAction label='Terms of service' />
					<BottomNavigationAction label='Support' />
					<BottomNavigationAction label={`© ${new Date().getFullYear()} Cognizant`} />
				</BottomNavigation>
			) : (
				<BottomNavigation className='footer transparent-footer' showLabels>
					<BottomNavigationAction label='Terms of service' />
					<div className='divider' />
					<BottomNavigationAction label='Support' />
					<div className='divider' />
					<BottomNavigationAction label={`© ${new Date().getFullYear()} Cognizant`} />
				</BottomNavigation>
			)}
		</div>
	);
};

export default PlannerFooter;
