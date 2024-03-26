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
import NavBarButton from './nav-bar-button/NavBarButton.tsx';

type NavigationSideBarProps = {
	drawerWidth: number;
	loggedIn: boolean;
	children: ReactNode;
};

const possiblePages = ['Home', 'My events', 'Settings'];

const NavigationSideBar: React.FC<NavigationSideBarProps> = (props) => {
	//Indicates on which page the user is on to highlight the button on the nav bar. To be removed when actual routing is added.
	let tempCurrentPage = possiblePages[Math.floor(Math.random() * possiblePages.length)];

	return (
		<>
			<Box id='sidebar-box'>
				<CssBaseline />
				<Drawer
					id='sidebar-drawer'
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
							<img className='cognizant-logo' src='Cognizant_logo.jpg' alt='Cognizant company logo' />
						</ListItem>
						{props.loggedIn && (
							<>
								<ListItem className='nav-list-item' key='Home' disablePadding>
									<NavBarButton buttonPage='Home' currentPage={tempCurrentPage} icon={<HomeRoundedIcon />} />
								</ListItem>
								<ListItem className='nav-list-item' key='My events' disablePadding>
									<NavBarButton buttonPage='My events' currentPage={tempCurrentPage} icon={<EventRoundedIcon />} />
								</ListItem>
								<ListItem className='nav-list-item' key='Settings' disablePadding>
									<NavBarButton buttonPage='Settings' currentPage={tempCurrentPage} icon={<SettingsRoundedIcon />} />
								</ListItem>
							</>
						)}
					</List>
				</Drawer>
			</Box>
			<Box
				className='wrapped-elements'
				sx={{ width: `calc(100% - ${props.drawerWidth}px)`, ml: `${props.drawerWidth}px`, backgroundColor: 'white' }}
			>
				{props.children}
			</Box>
		</>
	);
};

export default NavigationSideBar;
