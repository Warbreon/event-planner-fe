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
import PlannerAppBarViewModel from './PlannerAppBarViewModel';
import EventSearchBar from './event-search-bar/EventSearchBar';
import styles from './PlannerAppBar.module.css';

const profileSettings = ['Profile', 'Logout'];

//Temporary number of notifs until we get it from backend.
const fakeNumberOfNotifications = 12;

const PlannerAppBar = () => {
	const viewModel = PlannerAppBarViewModel();

	return (
		<AppBar id='appBar' elevation={0} position='static'>
			<Container id='app-bar-container' maxWidth='xl'>
				<Toolbar disableGutters>
					<Box id='searchBarBox'>
						<EventSearchBar
							searchValue={viewModel.searchValue}
							handleSearchBarChange={viewModel.handleSearchBarChange}
							handleSearchKeyDown={viewModel.handleSearchKeyDown}
							handleSearch={viewModel.handleSearch}
						/>
					</Box>
					<Box id='notifBox'>
						<IconButton className={styles.iconButton} onClick={viewModel.handleClickOnNotifications}>
							{fakeNumberOfNotifications > 0 ? (
								<Badge badgeContent={fakeNumberOfNotifications} color='error'>
									<NotificationsRoundedIcon className={styles.notifIcon} />
								</Badge>
							) : (
								<NotificationsRoundedIcon className={styles.notifIcon} />
							)}
						</IconButton>
					</Box>
					<Box>
						<Tooltip title='Open settings'>
							<IconButton className={styles.iconButton} onClick={viewModel.handleOpenUserMenu}>
								<Avatar alt='Remy Sharp' src='https://thispersondoesnotexist.com/' />
							</IconButton>
						</Tooltip>
						<Menu
							id='profileMenuAppbar'
							anchorEl={viewModel.anchorUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(viewModel.anchorUser)}
							onClose={viewModel.handleCloseUserMenu}
						>
							{profileSettings.map((setting) => (
								<MenuItem key={setting} onClick={viewModel.handleCloseUserMenu}>
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
