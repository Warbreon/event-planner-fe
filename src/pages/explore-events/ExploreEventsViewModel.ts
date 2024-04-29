import { useCallback, useState } from 'react';
import { EventFiltersState } from './eventFiltersInterface';
import useEventAPI from '../../api/EventsAPI';
import { useFetch } from '../../api/hooks/ApiHooks';

const ExploreEventsVM = () => {
	const [filters, setFilters] = useState<EventFiltersState>({
		eventTag: 'all',
		date: 'year',
		location: 'all',
	});

	const { fetchEvents } = useEventAPI();

	const handleFiltersChange = useCallback((newFilters: Partial<EventFiltersState>) => {
		setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
	}, []);

	const { data: events, isLoading: eventsLoading, error: eventFetchError } = useFetch(() => fetchEvents());

	return { filters, handleFiltersChange, events, eventsLoading, eventFetchError };
};

export default ExploreEventsVM;
