import { useCallback, useEffect, useState } from 'react';
import useEventAPI from '../../api/EventsAPI';
import { usePaginatedFetch } from '../../api/hooks/ApiHooks';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store/Store';
import { useLocation } from 'react-router';
import { ALERT_SEVERITY } from '../../components/snackbar/SnackbarComponent';

const ExploreEventsVM = () => {
    const filters = useSelector((state: StoreState) => state.filters);
    const { fetchPaginatedEvents } = useEventAPI();
    const initialPageSize = 12;

    const location = useLocation();
	const [isSnackbarOpen, setSnackbarOpen] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');
	const [snackbarSeverity, setSnackbarSeverity] = useState(ALERT_SEVERITY.SUCCESS);

	useEffect(() => {
		if (location.state?.message) {
			setSnackbarMessage(location.state.message);
			setSnackbarSeverity(location.state.severity);
			setSnackbarOpen(true);
		}
	}, [location.state]);

	const handleSnackbarClose = () => {
		setSnackbarOpen(false);
	};

    const fetchFunction = useCallback((page: number, size: number) => {
        return fetchPaginatedEvents(filters.eventTag, Number(filters.date), filters.location, filters.name, page, size);
    }, [filters.eventTag, filters.date, filters.location, filters.name]);

    const { data: events, isLoading, error, loadMore, hasMore, notFound } = usePaginatedFetch(fetchFunction, initialPageSize, [filters]);

    return {
        events, 
        isLoading, 
        error, 
        loadMore, 
        hasMore, 
        notFound,
        isSnackbarOpen,
        snackbarMessage,
        snackbarSeverity,
        handleSnackbarClose
    };
};

export default ExploreEventsVM;
