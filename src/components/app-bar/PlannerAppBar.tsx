import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Badge } from '@mui/material';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import './PlannerAppBar.css';
import EventSearchBar from './event-search-bar/EventSearchBar.tsx';

const profileSettings = ['Profile', 'Logout'];

//Temporary number of notifs until we get it from backend.
const fakeNumberOfNotifications = 12;

const PlannerAppBar = () => {
	const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);

	const handleClickOnNotifications = (event: React.MouseEvent<HTMLElement>) => {
		console.log("Trying to redirect to notification's window.");
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorUser(null);
	};

	return (
		<AppBar id='app-bar' position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box id='search-bar-box'>
						<EventSearchBar />
					</Box>
					<Box id='notif-box'>
						<IconButton className='icon-button' onClick={handleClickOnNotifications}>
							{fakeNumberOfNotifications > 0 ? (
								<Badge badgeContent={fakeNumberOfNotifications} color='error'>
									<NotificationsRoundedIcon className='notif-icon' />
								</Badge>
							) : (
								<NotificationsRoundedIcon className='notif-icon' />
							)}
						</IconButton>
					</Box>
					<Box>
						<Tooltip title='Open settings'>
							<IconButton className='icon-button' onClick={handleOpenUserMenu}>
								<Avatar alt='Remy Sharp' src='https://thispersondoesnotexist.com/' />
							</IconButton>
						</Tooltip>
						<Menu
							id='profile-menu-appbar'
							anchorEl={anchorUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorUser)}
							onClose={handleCloseUserMenu}
						>
							{profileSettings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default PlannerAppBar;
