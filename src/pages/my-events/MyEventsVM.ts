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
	const [subheader, setSubheader] = useState<string>('');
	const [isAdmin, setIsAdmin] = useState<boolean>(false);
	const [currentTab, setCurrentTab] = useState<number>(0);

	const [eventsAttending, setEventsAttending] = useState<Event[]>([]);
	const [eventsCreated, setEventsCreated] = useState<Event[]>([]);

	const navigate = useNavigate();

	const currentUserRole = useSelector((state: StoreState) => state.user.role);

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
	const { fetchData, isLoading, error } = useFetchConditionally();

	

	const setRoleAndSubheader = () => {
		if (currentUserRole === 'EVENT_ADMIN' || currentUserRole === 'SYSTEM_ADMIN') {
			setIsAdmin(true);
			setSubheader(SUBHEADER.ADMIN);
		} else if (currentUserRole === 'USER') {
			setIsAdmin(false);
			setSubheader(SUBHEADER.USER);
		}
	};

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
		setRoleAndSubheader();
		fetchEvents();
	}, []);

	const chipOptions = [
		{ id: 0, name: `I’m attending (${eventsAttending.length})` },
		{ id: 1, name: `Created by me (${eventsCreated.length})` },
	];

	return {
		isAdmin,
		subheader,
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
