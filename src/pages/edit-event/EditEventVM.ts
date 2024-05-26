import { useParams } from 'react-router-dom';
import { useApiRequest, useFetch } from '../../api/hooks/ApiHooks';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useEventAPI from '../../api/EventsAPI';

const useEditEventViewModel = () => {
	const { eventId } = useParams();
	const currentUserId = useSelector((state: any) => state.userInfo.userId);
	const currentUserRole = useSelector((state: any) => state.user.role);

	const [fullyLoaded, setFullyLoaded] = useState<boolean>(false);

	const { confirmEventCreatorToEdit } = useEventAPI();
	const fetchFunction = useCallback(() => {
		return confirmEventCreatorToEdit(Number(eventId), currentUserId);
	}, []);

	const { data: isCreatedByUser, isLoading: isCheckingEditPermissions, error } = useFetch(fetchFunction);

	const { fetchEventById } = useEventAPI();

	const { request: fetchData, data: event, isLoading: isLoadingEvent, error: loadingEventError } = useApiRequest();

	const fetcheEventByIdFunction = useCallback(() => {
		return fetchEventById(Number(eventId));
	}, []);

	const fetchDataFunction = useCallback(() => {
		return fetchData(fetcheEventByIdFunction);
	}, []);

	useEffect(() => {
		if(currentUserRole === 'SYSTEM_ADMIN'){
			fetchDataFunction();
			return;
		}


		if (!isCheckingEditPermissions) {
			if (!!isCreatedByUser && isCreatedByUser) {
				fetchDataFunction();
			}
		}
	}, [fetchDataFunction, isCreatedByUser, isCheckingEditPermissions, currentUserRole]);

	useEffect(() => {
		if (!isLoadingEvent && event) {
			setFullyLoaded(true);
		}
	}, [event, isLoadingEvent]);

	return { currentUserRole, event, isCheckingEditPermissions, isLoadingEvent, error, loadingEventError, isCreatedByUser, fullyLoaded };
};

export default useEditEventViewModel;
