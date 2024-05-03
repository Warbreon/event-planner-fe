import { useCallback } from "react";
import useAxios from "./axios/Axios"
import { ENDPOINTS } from "./endpoints/Endpoints";

const useAddressAPI = () => {
    const axios = useAxios();
    const fetchAllCities = useCallback(() => axios.get<string[]>(ENDPOINTS.getAllCities), []);

    return fetchAllCities;
}

export default useAddressAPI;