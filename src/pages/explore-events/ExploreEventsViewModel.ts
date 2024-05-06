import { useCallback } from 'react';
import useEventAPI from '../../api/EventsAPI';
import { usePaginatedFetch } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';

const ExploreEventsVM = () => {
    const filters = useSelector((state: StoreState) => state.filters);
    const { fetchPaginatedEvents } = useEventAPI();
    const initialPageSize = 12;

    const fetchFunction = useCallback((page: number, size: number) => {
        return fetchPaginatedEvents(filters.eventTag, Number(filters.date), filters.location, filters.name, page, size);
    }, [filters.eventTag, filters.date, filters.location, filters.name]);

    const { data: events, isLoading, error, loadMore, hasMore } = usePaginatedFetch(fetchFunction, initialPageSize, [filters]);

    return { events, isLoading, error, loadMore, hasMore };
};

export default ExploreEventsVM;
