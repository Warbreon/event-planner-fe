import { useCallback, useState } from 'react';
import { EventFiltersState } from './eventFiltersInterface';
import useEventAPI from '../../api/EventsAPI';
import { useFetch } from '../../api/hooks/ApiHooks';

const ExploreEventsVM = () => {
	const [filters, setFilters] = useState<EventFiltersState>({
		eventTag: [],
		date: '365',
		location: 'all',
	});

    const { fetchEvents } = useEventAPI();

    const fetchFunction = useCallback(() => {
        return fetchEvents(filters.eventTag, Number(filters.date), filters.location);
    }, [filters.eventTag, filters.date, filters.location]);

    const { data: events, isLoading, error } = useFetch(fetchFunction);

	const handleFiltersChange = useCallback((newFilters: Partial<EventFiltersState>) => {
		setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
	}, []);

    return { filters, handleFiltersChange, events, isLoading, error };
};

export default ExploreEventsVM;
