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
	const postData = async <T>(postFunction: () => Promise<AxiosResponse<T>>) => {
		try {
			const response = await postFunction();
			return response.data;
		} catch (error: any) {
			return error;
		} 
	};
	return { postData };
};