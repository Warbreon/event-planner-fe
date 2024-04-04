import React, { ReactNode, ReactElement } from 'react';
import { IconButton } from '@mui/material';
import classNames from 'classnames';
import styles from './NavBarButton.module.css';

type NavBarButtonProps = {
	buttonPage: string;
	currentPage: string;
	icon: ReactNode;
	handleClickOnNavButton: (redirectionName: string) => void;
};

const NavBarButton: React.FC<NavBarButtonProps> = ({ buttonPage, currentPage, icon, handleClickOnNavButton }) => {
	return (
		<div id={`${buttonPage}-button-div`}>
			<IconButton
				onClick={() => handleClickOnNavButton(buttonPage)}
				className={classNames(styles.navButton, {
					[styles.activeButton]: buttonPage === currentPage,
					[styles.inactiveButton]: buttonPage !== currentPage,
				})}
				sx={{ borderRadius: '10px' }}
			>
				{React.cloneElement(icon as ReactElement<any>, {
					className: classNames({
						[styles.activeIcon]: buttonPage === currentPage,
						[styles.inactiveIcon]: buttonPage !== currentPage,
					}),
				})}
			</IconButton>
			<p className={classNames(styles.navText, {
				[styles.activeText]: buttonPage === currentPage,
				[styles.inactiveText]: buttonPage !== currentPage,
			})}>{buttonPage}</p>
		</div>
	);
};

export default NavBarButton;
