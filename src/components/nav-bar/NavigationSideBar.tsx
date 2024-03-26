import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import './NavigationSideBar.css';
import { IconButton } from '@mui/material';

type NavigationSideBarProps = {
	drawerWidth: number;
	loggedIn: boolean;
	children: ReactNode;
};

const possiblePages = ['HOME', 'MY_EVENTS', 'SETTINGS'];

const NavigationSideBar: React.FC<NavigationSideBarProps> = (props) => {
	const handleClickOnNavButton = (event: React.MouseEvent<HTMLElement>) => {
		console.log('Trying to redirect to selected path');
	};

	//Indicates on which page the user is on to highlight the button on the nav bar. To be removed when actual routing is added.
	let tempCurrentPage = possiblePages[Math.floor(Math.random() * possiblePages.length)];

	return (
		<>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<Drawer
					sx={{
						width: props.drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: props.drawerWidth,
							boxSizing: 'border-box',
							overflowY: 'auto',
						},
					}}
					variant='permanent'
					anchor='left'
				>
					<List className='nav-list'>
						<ListItem className='nav-list-item' key='Cognizant' disablePadding>
							<img
								className='cognizant-logo'
								src='Cognizant_logo.jpg'
								alt='Cognizant company logo'
								height={50}
								width={50}
								style={{ marginBottom: '25px' }}
							/>
						</ListItem>
						{props.loggedIn && (
							<>
								<ListItem className='nav-list-item' key='Home' disablePadding sx={{ width: '70px' }}>
									<IconButton
										onClick={handleClickOnNavButton}
										className={`nav-button ${tempCurrentPage === 'HOME' ? 'active-button' : 'inactive-button'}`}
										sx={{ borderRadius: '10px' }}
									>
										<HomeRoundedIcon className={tempCurrentPage === 'HOME' ? 'active-icon' : 'inactive-icon'} />
									</IconButton>
									<p className={`nav-text ${tempCurrentPage === 'HOME' ? 'active-text' : 'inactive-text'}`}>Home</p>
								</ListItem>
								<ListItem className='nav-list-item' key='My events' disablePadding sx={{ width: '70px' }}>
									<IconButton
										onClick={handleClickOnNavButton}
										className={`nav-button ${tempCurrentPage === 'MY_EVENTS' ? 'active-button' : 'inactive-button'}`}
										sx={{ borderRadius: '10px' }}
									>
										<EventRoundedIcon className={tempCurrentPage === 'MY_EVENTS' ? 'active-icon' : 'inactive-icon'} />
									</IconButton>
									<p className={`nav-text ${tempCurrentPage === 'MY_EVENTS' ? 'active-text' : 'inactive-text'}`}>
										My events
									</p>
								</ListItem>
								<ListItem className='nav-list-item' key='Settings' disablePadding sx={{ width: '70px' }}>
									<IconButton
										onClick={handleClickOnNavButton}
										className={`nav-button ${tempCurrentPage === 'SETTINGS' ? 'active-button' : 'inactive-button'}`}
										sx={{ borderRadius: '10px' }}
									>
										<SettingsRoundedIcon className={tempCurrentPage === 'SETTINGS' ? 'active-icon' : 'inactive-icon'} />
									</IconButton>
									<p className={`nav-text ${tempCurrentPage === 'SETTINGS' ? 'active-text' : 'inactive-text'}`}>
										Settings
									</p>
								</ListItem>
							</>
						)}
					</List>
				</Drawer>
			</Box>
			<Box className='wrapped-elements' sx={{ width: `calc(100% - ${72}px)`, ml: `${72}px`, backgroundColor: 'white' }}>
				{props.children}
			</Box>
		</>
	);
};

export default NavigationSideBar;
