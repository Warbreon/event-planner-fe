import AppBar from '@mui/material/AppBar';
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
import styles from './PlannerAppBar.module.css';
import SearchBar from './search-bar/SearchBar';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { ICON_STYLES } from '../../themes/styles/Icon';
import { TEXTFIELD_STYLES } from '../../themes/styles/TextField';
import ROUTES from '../../routes/Routes';
import { AccountCircle } from '@mui/icons-material';
import ErrorAlert from '../error/ErrorAlert';

const profileSettings = ['Profile', 'Logout'];

const PlannerAppBar = () => {
	const {
		userFirstName,
		userImageUrl,
		notificationCount,
		error,
		pathname,
		anchorUser,
		handleClickOnNotifications,
		handleOpenUserMenu,
		handleCloseUserMenu,
		searchValue,
		handleSearchBarChange,
		handleMenuOptions 
	} = PlannerAppBarViewModel();

	return (
		<AppBar className={styles.appBar}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<div className={styles.appBarContainer}>
						<div className={styles.searchBarContainer}>
							{pathname === ROUTES.INDEX &&
								<SearchBar
									value={searchValue}
									styles={TEXTFIELD_STYLES.EVENT_SEARCH_BAR}
									onChange={handleSearchBarChange}
									placeholder='Search for events....'
								>
										<SearchRoundedIcon className={ICON_STYLES.GRAY_ICON} />
								</SearchBar>
							}
						</div>
						<div className={styles.userActionsContainer}>
							<IconButton className={styles.bellIconButton} onClick={handleClickOnNotifications}>
								{notificationCount > 0 ? (
									<Badge badgeContent={notificationCount} color='error'>
										<NotificationsRoundedIcon className={styles.notifIcon} />
									</Badge>
								) : (
									<NotificationsRoundedIcon className={styles.notifIcon} />
								)}
							</IconButton>
							<div>
								<Tooltip title='Open settings'>
									<IconButton className={styles.iconButton} onClick={handleOpenUserMenu}>
										{userImageUrl ? <Avatar alt={userFirstName || 'Avatar'} src={userImageUrl} /> : <AccountCircle />}
									</IconButton>
								</Tooltip>
								<Menu
									id='profileMenuAppbar'
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
									className={styles.profileMenu}
								>
									{profileSettings.map((setting) => (
										<MenuItem
											key={setting}
											onClick={() => handleMenuOptions(setting)}
											className={styles.menuItem}
										>
											<Typography className={styles.menuTypography}>{setting}</Typography>
										</MenuItem>
									))}
								</Menu>
							</div>
						</div>
					</div>
				</Toolbar>
			</Container>
			{error && (
				<ErrorAlert message={error} />
			)}
		</AppBar>
	);
};

export default PlannerAppBar;
