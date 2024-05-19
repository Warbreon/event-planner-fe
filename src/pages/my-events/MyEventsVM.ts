import classNames from 'classnames';
import ROUTES from '../../routes/Routes';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, StoreState } from '../../redux/store/Store';
import { TAGS } from '../../themes/styles/Tag';
import { useNavigate } from 'react-router-dom';
import { fetchEventsCreatedByUser, fetchUserEvents } from '../../redux/slices/MyEventsSlice';

const enum SUBHEADER {
	ADMIN = 'View all events you’re attending and manage events created by you',
	USER = 'View all events you’re attending in one place',
}

const useMyEventsVM = () => {
	const currentUserRole = useSelector((state: StoreState) => state.user.role);
	let subheader: string = '';
	let isAdmin: boolean = false;

	switch (currentUserRole) {
		case 'EVENT_ADMIN':
		case 'SYSTEM_ADMIN':
			subheader = SUBHEADER.ADMIN;
			isAdmin = true;
			break;
		case 'USER':
			subheader = SUBHEADER.USER;
			isAdmin = false;
	}

	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUserEvents());
		if (isAdmin) {
			dispatch(fetchEventsCreatedByUser());
		}
	}, [dispatch, isAdmin]);

	const {
		userEventList,
		createdByUserList,
		isLoadingUserEvents,
		isLoadingCreatedByUser,
		error,
	} = useSelector((state: any) => state.myEvents);

	const [currentTab, setCurrentTab] = useState<number>(0);
	const navigate = useNavigate();

	const chipOptions = [
		{ id: 0, name: `I’m attending (${userEventList.length})` },
		{ id: 1, name: `Created by me (${createdByUserList.length})` },
	];

	const getChipClassName = (isSelected: boolean) => {
		return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
	};

	const handleTabChange = async (tabId: number) => {
		setCurrentTab(tabId);
	};

	const onAddEventClick = () => {
		navigate(ROUTES.ADD_EVENT);
	};

	return {
		subheader,
		isAdmin,
		currentTab,
		chipOptions,
		userEventList,
		createdByUserList,
		isLoadingUserEvents,
		isLoadingCreatedByUser,
		error,
		handleTabChange,
		getChipClassName,
		onAddEventClick,
	};
};

export default useMyEventsVM;
