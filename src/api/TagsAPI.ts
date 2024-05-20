import { useCallback } from "react";
import { Tag } from "../models/Tag";
import { ENDPOINTS } from "./endpoints/Endpoints";
import axiosInstance from "./axios/AxiosInstance";

const useTagAPI = () => {
	const fetchAllTags = useCallback(() => axiosInstance.get<Tag[]>(ENDPOINTS.getAllTags), []);

	return fetchAllTags;
};
export default useTagAPI;