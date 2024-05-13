import { useParams } from 'react-router-dom';
import useEventAPI from '../../api/EventsAPI';
import { useCallback } from 'react';
import { useFetch } from '../../api/hooks/ApiHooks';

const useEditEventViewModel = () => {
	const { eventId } = useParams();
	const { fetchEventById } = useEventAPI();

	const fetchFunction = useCallback(() => {
		return fetchEventById(Number(eventId));
	}, [eventId]);

	const { data: event, isLoading, error } = useFetch(fetchFunction);

	return { event, isLoading, error };
};

export default useEditEventViewModel;
