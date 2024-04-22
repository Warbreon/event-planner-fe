import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";

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
                setError(`Error fetching data: ${error.response?.data?.message || error.message || "Unknown error"}`);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [fetchFunction]);

    return { data, isLoading, error };
}

export const usePost = <T>(postFunction: (payload: {}) => Promise<AxiosResponse<T>>, payload: {}) => {
    const [responseData, setResponseData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const postData = async () => {
            try {
                const response = await postFunction(payload);
                setResponseData(response.data);
            } catch (error: any) {
                setError(`Error posting data: ${error.response?.data?.message || error.message || "Unknown error"}`);
            } finally {
                setIsLoading(false);
            }
        };
        postData();
    }, [payload, postFunction]);

    return { responseData, isLoading, error };
}