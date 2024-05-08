import { useCallback, useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import { PaginatedResponse } from '../../models/response/PaginatedResponse';

export const useFetch = <T>(fetchFunction: () => Promise<AxiosResponse<T>>) => {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchFunction();
				setData(response.data);
			} catch (error: any) {
				setError(`Error fetching data: ${error.response?.data?.message || error.message || 'Unknown error'}`);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [fetchFunction]);

	return { data, isLoading, error };
};

// export const useFetchConditionally = () => {
// 	const [isLoading, setIsLoading] = useState<boolean>(true);
// 	const [error, setError] = useState<string | null>(null);
// 	const fetchData = async <T>(fetchFunction: () => Promise<AxiosResponse<T>>) => {
// 		try {
// 			setIsLoading(true);
// 			const response = await fetchFunction();
// 			setError(null);
// 			return response;
// 		} catch (error: any) {
// 			setError(error);
// 			return error;
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};
// 	return { fetchData, isLoading, error };
// };

export const useApiRequest = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<any>(null);
	const requestData = async <T>(requestFunction: () => Promise<AxiosResponse<T>>) => {
		try {
			setIsLoading(true);
			const response = await requestFunction();
			setData(response.data);
			setError(null);
			return response;
		} catch (error: any) {
			setError(error);
			setData(null);
			return error;
		} finally {
			setIsLoading(false);
		}
	};
	return { requestData, isLoading, error, data };
};

export const usePaginatedFetch = <T>(
	fetchFunction: (page: number, size: number) => Promise<AxiosResponse<PaginatedResponse<T>>>,
	initialPageSize: number,
	resetDependency: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [page, setPage] = useState<number>(0);
	const [hasMore, setHasMore] = useState<boolean>(true);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [notFound, setNotFound] = useState<string>('');

	const loadData = useCallback(
		async (currentPage: number) => {
			try {
				const response = await fetchFunction(currentPage, initialPageSize);
				const newData = response.data.content;
				setNotFound(newData.length === 0 ? 'No events found' : '');
				setData((prevData) => (currentPage === 0 ? newData : [...prevData, ...newData]));
				setPage(currentPage);
				setHasMore(!response.data.last);
			} catch (error: any) {
				setError(`Error fetching data: ${error.response?.data?.message || error.message || 'Unknown error'}`);
			} finally {
				setIsLoading(false);
			}
		},
		[fetchFunction, initialPageSize]
	);

	useEffect(() => {
		setData([]);
		loadData(0);
	}, resetDependency);

	const loadMore = useCallback(() => {
		loadData(page + 1);
	}, [loadData, page]);

	return { data, isLoading, error, hasMore, loadMore, notFound };
};
