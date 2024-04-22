import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/slices/UserSlice';

const PlannerAppBarViewModel = () => {
	const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
	const [searchValue, setSearchValue] = useState<string>('');
	const dispatch = useDispatch();

	const handleClickOnNotifications = (event: React.MouseEvent<HTMLElement>) => {
		console.log("Trying to redirect to notification's window.");
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorUser(event.currentTarget);
	};

	const handleSignOut = () => {
		dispatch(signOut());
	}

	const handleProfileClick = () => {
		console.log("Open user profile")
	}


	const handleMenuOptions  = (menuItem: String) => {
		if (menuItem === 'Profile') {
			handleProfileClick();
		} else if (menuItem === 'Logout') {
			handleSignOut();
		}

		handleCloseUserMenu();
	}

	const handleCloseUserMenu = () => {
		setAnchorUser(null);
	};


	const handleSearchBarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
	};

	const handleSearch = () => {
		console.log(`Searching for ${searchValue} and redirecting to search results`);
	};

	const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			handleSearch();
		}
	};

	return {
		anchorUser,
		handleClickOnNotifications,
		handleOpenUserMenu,
		handleCloseUserMenu,
		searchValue,
		handleSearchBarChange,
		handleSearchKeyDown,
		handleSearch,
		handleMenuOptions
	};
};

export default PlannerAppBarViewModel;
