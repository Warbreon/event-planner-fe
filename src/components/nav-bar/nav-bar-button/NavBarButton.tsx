import React, { ReactNode, ReactElement } from 'react';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import styles from './NavBarButton.module.css';

type NavBarButtonProps = {
	buttonPage: string;
	buttonPageRoute: string;
	currentRoute: string;
	icon: ReactNode;
	handleClickOnNavButton: (redirectionName: string) => void;
};

const NavBarButton: React.FC<NavBarButtonProps> = ({
	buttonPage,
	buttonPageRoute,
	currentRoute,
	icon,
	handleClickOnNavButton,
}) => {
	return (
		<div id={`${buttonPage}-button-div`}>
			<IconButton
				onClick={() => handleClickOnNavButton(buttonPageRoute)}
				className={classNames(styles.navButton, {
					[styles.activeButton]: buttonPageRoute === currentRoute,
					[styles.inactiveButton]: buttonPageRoute !== currentRoute,
				})}
				sx={{ borderRadius: '10px' }}
				disableRipple
			>
				{React.cloneElement(icon as ReactElement<any>, {
					className: classNames({
						[styles.activeIcon]: buttonPageRoute === currentRoute,
						[styles.inactiveIcon]: buttonPageRoute !== currentRoute,
					}),
				})}
			</IconButton>
			<p
				className={classNames(styles.navText, {
					[styles.activeText]: buttonPageRoute === currentRoute,
					[styles.inactiveText]: buttonPageRoute !== currentRoute,
				})}
			>
				{buttonPage}
			</p>
		</div>
	);
};

export default NavBarButton;
