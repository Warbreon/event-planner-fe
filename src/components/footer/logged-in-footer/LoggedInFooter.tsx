import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import styles from './LoggedInFooter.module.css';

type LoggedInFooterProps = {
	handleClickCognizant: () => void;
	handleClickPrivacy: () => void;
};

const LoggedInFooter: React.FC<LoggedInFooterProps> = ({ handleClickCognizant, handleClickPrivacy }) => {
	return (
		<BottomNavigation className={styles.userFooter} showLabels>
			<BottomNavigationAction
				onClick={handleClickCognizant}
				label={`© ${new Date().getFullYear()} Cognizant`}
				disableRipple
			/>
			<BottomNavigationAction onClick={handleClickPrivacy} label='Privacy policy' disableRipple />
		</BottomNavigation>
	);
};

export default LoggedInFooter;
