import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

type LoggedOutFooterProps = {
	handleClickCognizant: () => void;
	handleClickTerms: () => void;
	handleClickSupport: () => void;
};

const LoggedOutFooter: React.FC<LoggedOutFooterProps> = ({
	handleClickCognizant,
	handleClickTerms,
	handleClickSupport,
}) => {
	return (
		<BottomNavigation className='guest-footer' showLabels>
			<BottomNavigationAction onClick={handleClickTerms} label='Terms of service' />
			<div className='divider' />
			<BottomNavigationAction onClick={handleClickSupport} label='Support' />
			<div className='divider' />
			<BottomNavigationAction onClick={handleClickCognizant} label={`© ${new Date().getFullYear()} Cognizant`} />
		</BottomNavigation>
	);
};

export default LoggedOutFooter;
