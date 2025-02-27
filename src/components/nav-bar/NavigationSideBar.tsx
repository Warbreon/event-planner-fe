import React, { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NavBarButton from './nav-bar-button/NavBarButton';
import NavigationSideBarViewModel from './NavigationSideBarViewModel';
import styles from './NavigationSideBar.module.css';
import routes from '../../routes/Routes';

type NavigationSideBarProps = {
	drawerWidth: number;
	children: ReactNode;
};

const NavigationSideBar: React.FC<NavigationSideBarProps> = (props) => {
	const { loggedInStatus, currentRoute, handleClickOnNavButton, isSystemAdmin} = NavigationSideBarViewModel();

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
						<ListItem className={styles.navListItem} key='Cognizant' disablePadding>
							<img className={styles.cognizantLogo} src='/Cognizant_logo.jpg' alt='Cognizant company logo' />
						</ListItem>
						{loggedInStatus && (
							<>
								<ListItem className={styles.navListItem} key='Home' disablePadding>
									<NavBarButton
										buttonPage='Home'
										buttonPageRoute={routes.INDEX}
										currentRoute={currentRoute}
										icon={<HomeRoundedIcon />}
										handleClickOnNavButton={handleClickOnNavButton}
									/>
								</ListItem>
								<ListItem className={styles.navListItem} key='My events' disablePadding>
									<NavBarButton
										buttonPage='My events'
										buttonPageRoute={routes.MY_EVENTS}
										currentRoute={currentRoute}
										icon={<EventRoundedIcon />}
										handleClickOnNavButton={handleClickOnNavButton}
									/>
								</ListItem>
								{isSystemAdmin && (
									<ListItem className={styles.navListItem} key='Settings' disablePadding>
										<NavBarButton
											buttonPage='Settings'
											buttonPageRoute={routes.SETTINGS}
											currentRoute={currentRoute}
											icon={<SettingsRoundedIcon />}
											handleClickOnNavButton={handleClickOnNavButton}
										/>
									</ListItem>
								)}
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
