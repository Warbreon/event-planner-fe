import { useCallback, useState } from "react";
import { EventFiltersState } from "./eventFiltersInterface";
import { useFetch } from "../../api/hooks/ApiHooks";
import { fetchEvents } from "../../api/EventApi";

const ExploreEventsVM = () => {
    const [filters, setFilters] = useState<EventFiltersState>({
        eventTag: [],
        date: 'year',
        location: 'all',
    });

    const fetchFunction = useCallback(() => {
        return fetchEvents(filters.eventTag);
    }, [filters.eventTag]);

    const { data: events, isLoading, error } = useFetch(fetchFunction);

    const handleFiltersChange = useCallback((newFilters: Partial<EventFiltersState>) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    }, []);

    return { filters, handleFiltersChange, events, isLoading, error };

}

export default ExploreEventsVM;
