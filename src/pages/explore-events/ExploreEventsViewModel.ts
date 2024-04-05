import { useCallback, useEffect, useState } from "react";
import { EventFiltersState } from "./eventFiltersInterface";

const ExploreEventsVM = () => {
    const [filters, setFilters] = useState<EventFiltersState>({
        eventTag: 'all',
        date: 'year',
        location: 'all',
    });

    const handleFiltersChange = useCallback((newFilters: Partial<EventFiltersState>) => {
        setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
    }, []);

    return { filters, handleFiltersChange };

}

export default ExploreEventsVM;
