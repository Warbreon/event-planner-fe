import { useCallback, useEffect, useState } from 'react';
import { EventFiltersState } from './eventFiltersInterface';
import { RefreshTokenRequest } from '../../api/Authentication';
import { useDispatch, useSelector } from 'react-redux';
import { PersistentStoreRootState } from '../../redux/store/PersistentStore';
import { isExpired } from 'react-jwt';
import { refreshAccessToken } from '../../redux/slices/UserSlice';

const ExploreEventsVM = () => {
	const [filters, setFilters] = useState<EventFiltersState>({
		eventTag: 'all',
		date: 'year',
		location: 'all',
	});

	const handleFiltersChange = useCallback((newFilters: Partial<EventFiltersState>) => {
		setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
	}, []);

	const currectAccessToken = useSelector((state: PersistentStoreRootState) => state.accessToken);
	const refreshToken = useSelector((state: PersistentStoreRootState) => state.refreshToken);

	const isAccessTokenExpired = isExpired(currectAccessToken);
	const isRefreshTokenExpired = isExpired(refreshToken);

	const { refresh } = RefreshTokenRequest(refreshToken);
	const dispatch = useDispatch();

	// useEffect(() => {
	//     const fetchNewAccessToken = async () => {
	//         console.log(`requested new token. is access token expired: ${isAccessTokenExpired}. is refresh token expired: ${isRefreshTokenExpired}`)
	//         if(isAccessTokenExpired && !isRefreshTokenExpired){
	//             console.log(`requesting refresh, token expired ${currectAccessToken}`)
	//             const { accessToken, error } = await refresh();
	//             if (!error && accessToken) {
	//                 dispatch(refreshAccessToken(accessToken));
	//                 console.log(`dispaching new token: ${accessToken}`)
	//             }
	//         }
	//     };

	//     if (isAccessTokenExpired && !isRefreshTokenExpired) {
	//         fetchNewAccessToken()
	//     }
	// }, [currectAccessToken, dispatch, isAccessTokenExpired, isRefreshTokenExpired, refresh]);

	return { filters, handleFiltersChange };
};

export default ExploreEventsVM;
