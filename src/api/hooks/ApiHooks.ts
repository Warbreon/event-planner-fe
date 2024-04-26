import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

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
	}, []);

	return { data, isLoading, error };
};

export const usePost = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<any>(null);
	const postData = async <T>(postFunction: () => Promise<AxiosResponse<T>>) => {
		try {
			setIsLoading(true);
			const response = await postFunction();
			setData(response.data);
			setError(null);
		} catch (error: any) {
			setError(error);
			setData(null);
			return error;
		} finally {
			setIsLoading(false);
		}
	};
	return { postData, isLoading, error, data };
};
