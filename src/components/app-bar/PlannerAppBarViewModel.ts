import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/slices/AuthenticationSlice';
import { setName } from '../../redux/slices/FiltersSlice';
import { useDebouncedCallback } from 'use-debounce';	
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { useFetch } from '../../api/hooks/ApiHooks';
import useAuthenticationAPI from '../../api/AuthenticationAPI';
import { removeUserInfo, setUserInfo, updateNotificationCount } from '../../redux/slices/UserInfoSlice';
import ROUTES from '../../routes/Routes';
import useWebSocketService from '../../services/WebSocketService';

const PlannerAppBarViewModel = () => {
	const [anchorUser, setAnchorUser] = useState<null | HTMLElement>(null);
	const [searchValue, setSearchValue] = useState<string>('');
	const userFirstName = useSelector((state: StoreState) => state.userInfo.userFirstName);
	const userImageUrl = useSelector((state: StoreState) => state.userInfo.userImageUrl);
	const notificationCount = useSelector((state: StoreState) => state.userInfo.notificationCount);
	const dispatch = useDispatch();
	let location = useLocation();
	const { pathname } = location;
	const navigate = useNavigate();

	const { fetchUserInfo } = useAuthenticationAPI();

	const fetchFunction = useCallback(() => {
		return fetchUserInfo();
	}, []);

	const { data: userInfo } = useFetch(fetchFunction);

	useEffect(() => {
		dispatch(setUserInfo(userInfo));
	}, [userInfo, dispatch]);

	const { messages } = useWebSocketService();

	useEffect(() => {
		if (messages.length > 0) {
			const latestNotification = messages[messages.length - 1];
			dispatch(updateNotificationCount(Number(latestNotification)));
		}
	}, [messages, dispatch]);

	const handleClickOnNotifications = () => {
		navigate(ROUTES.NOTIFICATIONS);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorUser(event.currentTarget);
	};

	const handleSignOut = () => {
		dispatch(signOut());
		dispatch(removeUserInfo());
		localStorage.clear();
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
		userFirstName,
		userImageUrl,
		notificationCount,
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
