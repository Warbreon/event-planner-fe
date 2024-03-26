import React, { ReactNode, ReactElement } from 'react';
import { IconButton } from '@mui/material';
import './NavBarButton.css';

type NavBarButtonProps = {
	buttonPage: string;
	currentPage: string;
	icon: ReactNode;
};

const NavBarButton: React.FC<NavBarButtonProps> = ({ buttonPage, currentPage, icon }) => {
	const handleClickOnNavButton = (event: React.MouseEvent<HTMLElement>) => {
		console.log('Trying to redirect to selected path');
	};

	return (
		<div id={buttonPage + '-button-div'}>
			<IconButton
				onClick={handleClickOnNavButton}
				className={`nav-button ${buttonPage === currentPage ? 'active-button' : 'inactive-button'}`}
				sx={{ borderRadius: '10px' }}
			>
				{React.cloneElement(icon as ReactElement<any>, {
					className: buttonPage === currentPage ? 'active-icon' : 'inactive-icon',
				})}
			</IconButton>
			<p className={`nav-text ${buttonPage === currentPage ? 'active-text' : 'inactive-text'}`}>{buttonPage}</p>
		</div>
	);
};

export default NavBarButton;
