import React, { ReactNode, ReactElement } from 'react';
import { IconButton } from '@mui/material';
import './NavBarButton.css';

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
		<div id={buttonPage + '-button-div'}>
			<IconButton
				onClick={() => handleClickOnNavButton(buttonPageRoute)}
				className={`nav-button ${buttonPageRoute === currentRoute ? 'active-button' : 'inactive-button'}`}
				sx={{ borderRadius: '10px' }}
				disableRipple
			>
				{React.cloneElement(icon as ReactElement<any>, {
					className: buttonPageRoute === currentRoute ? 'active-icon' : 'inactive-icon',
				})}
			</IconButton>
			<p className={`nav-text ${buttonPageRoute === currentRoute ? 'active-text' : 'inactive-text'}`}>{buttonPage}</p>
		</div>
	);
};

export default NavBarButton;
