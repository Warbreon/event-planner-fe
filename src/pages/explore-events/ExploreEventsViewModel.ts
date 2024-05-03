import { useCallback, useState } from 'react';
import useEventAPI from '../../api/EventsAPI';
import { useFetch } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const ExploreEventsVM = () => {
	const filters = useSelector((state: StoreState) => state.filters);

    const { fetchEvents } = useEventAPI();

    const fetchFunction = useCallback(() => {
        return fetchEvents(filters.eventTag, Number(filters.date), filters.location, filters.name);
    }, [filters.eventTag, filters.date, filters.location, filters.name]);

    const { data: events, isLoading, error } = useFetch(fetchFunction);

    return { events, isLoading, error };
};

export default ExploreEventsVM;
