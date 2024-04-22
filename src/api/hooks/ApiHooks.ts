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

export const usePost = () => {
    
}