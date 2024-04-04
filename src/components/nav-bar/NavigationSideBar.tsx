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
import NavBarButton from './nav-bar-button/NavBarButton';
import NavigationSideBarViewModel from './NavigationSideBarViewModel';
import routes from '../../routes/routes';

type NavigationSideBarProps = {
	drawerWidth: number;
	children: ReactNode;
};

const NavigationSideBar: React.FC<NavigationSideBarProps> = (props) => {
	const viewModel = NavigationSideBarViewModel();

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
							<img className='cognizant-logo' src={'/Cognizant_logo.jpg'} alt='Cognizant company logo' />
						</ListItem>
						{viewModel.loggedInStatus && (
							<>
								<ListItem className='nav-list-item' key='Home' disablePadding>
									<NavBarButton
										buttonPage='Home'
										buttonPageRoute={routes.INDEX}
										currentRoute={viewModel.currentRoute}
										icon={<HomeRoundedIcon />}
										handleClickOnNavButton={viewModel.handleClickOnNavButton}
									/>
								</ListItem>
								<ListItem className='nav-list-item' key='My events' disablePadding>
									<NavBarButton
										buttonPage='My events'
										buttonPageRoute={routes.MY_EVENTS}
										currentRoute={viewModel.currentRoute}
										icon={<EventRoundedIcon />}
										handleClickOnNavButton={viewModel.handleClickOnNavButton}
									/>
								</ListItem>
								<ListItem className='nav-list-item' key='Settings' disablePadding>
									<NavBarButton
										buttonPage='Settings'
										buttonPageRoute={routes.SETTINGS}
										currentRoute={viewModel.currentRoute}
										icon={<SettingsRoundedIcon />}
										handleClickOnNavButton={viewModel.handleClickOnNavButton}
									/>
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
