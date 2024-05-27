import { useCallback } from "react";
import { ENDPOINTS } from "./endpoints/Endpoints";
import axiosInstance from "./axios/AxiosInstance";

const useAddressAPI = () => {
    const fetchAllCities = useCallback(() => axiosInstance.get<string[]>(ENDPOINTS.getAllCities), []);

    return fetchAllCities;
}

export default useAddressAPI;