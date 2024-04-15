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
import SearchBar from "./guest-search-bar/SearchBar";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React from "react";
import {ICON_STYLES} from "../../themes/styles/Icon";
import {TEXTFIELD_STYLES} from "../../themes/styles/TextField";

const profileSettings = ['Profile', 'Logout'];

//Temporary number of notifs until we get it from backend.
const fakeNumberOfNotifications = 12;

const PlannerAppBar = () => {
	const viewModel = PlannerAppBarViewModel();

	return (
		<AppBar className={styles.appBar}>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<div className={styles.appBarContainer}>
						<div className={styles.searchBarContainer}>
							<SearchBar
								value={viewModel.searchValue}
								styles={TEXTFIELD_STYLES.EVENT_SEARCH_BAR}
								onChange={viewModel.handleSearchBarChange}
								onKeyDown={viewModel.handleSearchKeyDown}
								placeholder='Search for events....'>
								<IconButton onClick={viewModel.handleSearch}>
									<SearchRoundedIcon className={ICON_STYLES.EVENT_SEARCH_BAR} />
								</IconButton>
							</SearchBar>
						</div>
						<div className={styles.userActionsContainer}>
							<IconButton className={styles.bellIconButton} onClick={viewModel.handleClickOnNotifications}>
								{fakeNumberOfNotifications > 0 ? (
									<Badge badgeContent={fakeNumberOfNotifications} color='error'>
										<NotificationsRoundedIcon className={styles.notifIcon} />
									</Badge>
								) : (
									<NotificationsRoundedIcon className={styles.notifIcon} />
								)}
							</IconButton>
							<div>
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
									className={styles.profileMenu}
								>
									{profileSettings.map((setting) => (
										<MenuItem key={setting} onClick={viewModel.handleCloseUserMenu} className={styles.menuItem}>
											<Typography className={styles.menuTypography}>{setting}</Typography>
										</MenuItem>
									))}
								</Menu>
							</div>
						</div>
					</div>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default PlannerAppBar;
