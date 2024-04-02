import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

type LoggedInFooterProps = {
	handleClickCognizant: () => void;
	handleClickPrivacy: () => void;
};

const LoggedInFooter: React.FC<LoggedInFooterProps> = ({ handleClickCognizant, handleClickPrivacy }) => {
	return (
		<BottomNavigation className='user-footer' showLabels>
			<BottomNavigationAction onClick={handleClickCognizant} label={`© ${new Date().getFullYear()} Cognizant`} />
			<BottomNavigationAction onClick={handleClickPrivacy} label='Privacy policy' />
		</BottomNavigation>
	);
};

export default LoggedInFooter;
