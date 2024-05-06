import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/slices/AuthenticationSlice';
import { setName } from '../../redux/slices/FiltersSlice';
import { useDebouncedCallback } from 'use-debounce';	
import { useLocation } from 'react-router';

const PlannerAppBarViewModel = () => {
	const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
	const [searchValue, setSearchValue] = useState<string>('');
	const dispatch = useDispatch();
	let location = useLocation();
	const { pathname } = location;

	const handleClickOnNotifications = (event: React.MouseEvent<HTMLElement>) => {
		console.log("Trying to redirect to notification's window.");
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorUser(event.currentTarget);
	};

	const handleSignOut = () => {
		dispatch(signOut());
	};

	const handleProfileClick = () => {
		console.log('Open user profile');
	};

	const handleMenuOptions = (menuItem: String) => {
		if (menuItem === 'Profile') {
			handleProfileClick();
		} else if (menuItem === 'Logout') {
			handleSignOut();
		}

		handleCloseUserMenu();
	};

	const handleCloseUserMenu = () => {
		setAnchorUser(null);
	};

	const debouncedSearch = useDebouncedCallback(
		(value: string) => {
			dispatch(setName(value));
	}, 500);

	const handleSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		debouncedSearch(event.target.value);
	};

	return {
		pathname,
		anchorUser,
		handleClickOnNotifications,
		handleOpenUserMenu,
		handleCloseUserMenu,
		searchValue,
		handleSearchBarChange,
		handleMenuOptions,
	};
};

export default PlannerAppBarViewModel;
