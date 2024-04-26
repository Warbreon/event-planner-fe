import { useCallback, useState } from 'react';
import { EventFiltersState } from './eventFiltersInterface';
import { fetchEvents } from '../../api/EventApi';
import { useFetch } from '../../api/hooks/ApiHooks';

const ExploreEventsVM = () => {
	const [filters, setFilters] = useState<EventFiltersState>({
		eventTag: 'all',
		date: 'year',
		location: 'all',
	});

	const handleFiltersChange = useCallback((newFilters: Partial<EventFiltersState>) => {
		setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
	}, []);

	const fetchEventsFunction = useCallback(() => {
		return fetchEvents();
	}, []);

	const { data: events, isLoading: eventsLoading, error: eventFetchError } = useFetch(fetchEventsFunction);

	return { filters, handleFiltersChange, events, eventsLoading, eventFetchError };
};

export default ExploreEventsVM;
