import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import classNames from 'classnames';
import { TAGS } from '../../themes/styles/Tag';
import useEventAPI from '../../api/EventsAPI';
import { useFetch } from '../../api/hooks/ApiHooks';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/Routes';

const enum SUBHEADER {
	ADMIN = 'View all events you’re attending and manage events created by you',
	USER = 'View all events you’re attending in one place',
}

const useMyEventsVM = () => {
	const [subheader, setSubheader] = useState<string>('');
	const [isAdmin, setIsAdmin] = useState<boolean>(false);
	const [currentTab, setCurrentTab] = useState<number>(0);

	const navigate = useNavigate();

	const currentUserRole = useSelector((state: StoreState) => state.user.role);

	useEffect(() => {
		switch (currentUserRole) {
			case 'USER':
				setSubheader(SUBHEADER.USER);
				setIsAdmin(false);
				return;
			case 'EVENT_ADMIN':
			case 'SYSTEM_ADMIN':
				setSubheader(SUBHEADER.ADMIN);
				setIsAdmin(true);
				return;
		}
	}, [currentUserRole]);

	const getChipClassName = (isSelected: boolean) => {
		return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
	};

	const handleTabChange = async (id: number) => {
		id === 0 ? setCurrentTab(0) : setCurrentTab(1);
	};

	const onAddEventClick = () => {
		navigate(ROUTES.ADD_EVENT);
	};

	const { fetchEventsUserAttending, fetchEventsCreatedByUser } = useEventAPI();

	const fetchEventsAttentingFunction = useCallback(() => {
		return fetchEventsUserAttending();
	}, []);

	const fetchEventsCreatedFunction = useCallback(() => {
		return fetchEventsCreatedByUser();
	}, []);

	const {
		data: eventsAttending,
		isLoading: isLoadingEventsAttending,
		error: isErrorEventsAttending,
	} = useFetch(fetchEventsAttentingFunction);

	const {
		data: createdEvents,
		isLoading: isLoadingCreatedEvents,
		error: isErrorCreatedEvents,
	} = useFetch(fetchEventsCreatedFunction);

	const chipOptions = [
		{ id: 0, name: `I’m attending (${eventsAttending?.length})` },
		{ id: 1, name: `Created by me (${createdEvents?.length})` },
	];

	return {
		isAdmin,
		subheader,
		currentTab,
		eventsAttending,
		isLoadingEventsAttending,
		isErrorEventsAttending,
		createdEvents,
		isLoadingCreatedEvents,
		isErrorCreatedEvents,
		chipOptions,
		handleTabChange,
		getChipClassName,
		onAddEventClick,
	};
};

export default useMyEventsVM;
