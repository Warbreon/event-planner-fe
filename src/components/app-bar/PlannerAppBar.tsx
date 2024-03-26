import React, { useState } from 'react';
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
import { Badge, InputAdornment, OutlinedInput, FormControl } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import './PlannerAppBar.css';

const settings = ['Profile', 'Logout'];

//Temporary number of notifs until we get it from backend.
const fakeNumberOfNotifications = 12;

const PlannerAppBar = () => {
	const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);
	const [value, setValue] = useState<string>('');

	const handleClickOnNotifications = (event: React.MouseEvent<HTMLElement>) => {
		console.log("Trying to redirect to notification's window.");
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorUser(null);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<AppBar position='static' sx={{ backgroundColor: 'white' }}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Box sx={{ display: 'flex', alignItems: 'flex-end', flexGrow: 1 }}>
						<FormControl fullWidth>
							<OutlinedInput
								id='event-search'
								className='event-search-input'
								type='text'
								placeholder='Search for event...'
								value={value}
								onChange={handleChange}
								startAdornment={
									<InputAdornment position='start'>
										<IconButton>
											<SearchRoundedIcon />
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</Box>
					<Box sx={{ m: 3 }}>
						<IconButton onClick={handleClickOnNotifications} sx={{ p: 0 }}>
							{fakeNumberOfNotifications > 0 ? (
								<Badge
									badgeContent={fakeNumberOfNotifications}
									color='error'
									overlap='rectangular'
									style={{ borderRadius: '8px' }}
								>
									<NotificationsRoundedIcon className='notif-icon' />
								</Badge>
							) : (
								<NotificationsRoundedIcon className='notif-icon' />
							)}
						</IconButton>
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title='Open settings'>
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<Avatar alt='Remy Sharp' src='https://thispersondoesnotexist.com/' />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
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
							{settings.map((setting) => (
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
