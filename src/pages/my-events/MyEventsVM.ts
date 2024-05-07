import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import classNames from 'classnames';
import { TAGS } from '../../themes/styles/Tag';
import useEventAPI from '../../api/EventsAPI';
import { useFetchConditionally } from '../../api/hooks/ApiHooks';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../routes/Routes';
import { Event } from '../../models/Event';

const enum SUBHEADER {
	ADMIN = 'View all events you’re attending and manage events created by you',
	USER = 'View all events you’re attending in one place',
}

const useMyEventsVM = () => {
	const currentUserRole = useSelector((state: StoreState) => state.user.role);

	const [currentTab, setCurrentTab] = useState<number>(0);

	const [eventsAttending, setEventsAttending] = useState<Event[]>([]);
	const [eventsCreated, setEventsCreated] = useState<Event[]>([]);

	const navigate = useNavigate();

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

	const chipOptions = [
		{ id: 0, name: `I’m attending (${eventsAttending.length})` },
		{ id: 0, name: `Created by me (${eventsCreated.length})` },
	];

	const getChipClassName = (isSelected: boolean) => {
		return classNames(TAGS.SELECT_TAG, { [TAGS.TAG_SELECTED]: isSelected });
	};

	const handleTabChange = async (tabSelectedId: number) => {
		tabSelectedId === 0 ? setCurrentTab(0) : setCurrentTab(1);
	};

	const onAddEventClick = () => {
		navigate(ROUTES.ADD_EVENT);
	};

	const { fetchEventsUserAttending, fetchEventsCreatedByUser } = useEventAPI();
	const { fetchData, isLoading, error } = useFetchConditionally();

	const fetchEvents = async () => {
		const response = await fetchData(() => fetchEventsUserAttending());
		const { data } = response;
		setEventsAttending(data);

		if (currentUserRole === 'EVENT_ADMIN' || currentUserRole === 'SYSTEM_ADMIN') {
			const response = await fetchData(() => fetchEventsCreatedByUser());
			if (response) {
				const { data } = response;
				setEventsCreated(data);
			}
		}
	};

	useEffect(() => {
		fetchEvents();
	}, []);

	return {
		subheader,
		isAdmin,
		currentTab,
		eventsAttending,
		eventsCreated,
		chipOptions,
		isLoading,
		error,
		handleTabChange,
		getChipClassName,
		onAddEventClick,
	};
};

export default useMyEventsVM;
