import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import styles from './LoggedOutFooter.module.css';

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
		<BottomNavigation className={styles.guestFooter} showLabels>
			<BottomNavigationAction
				className={styles.rightDivider}
				onClick={handleClickTerms}
				label='Terms of service'
				disableRipple
			/>
			<BottomNavigationAction
				className={styles.rightDivider}
				onClick={handleClickSupport}
				label='Support'
				disableRipple
			/>
			<BottomNavigationAction
				onClick={handleClickCognizant}
				label={`© ${new Date().getFullYear()} Cognizant`}
				disableRipple
			/>
		</BottomNavigation>
	);
};

export default LoggedOutFooter;
