import { Tag } from "../models/Tag";
import useAxios from "./axios/Axios";
import { ENDPOINTS } from "./endpoints/Endpoints";

const useTagAPI = () => {
	const axios = useAxios();
	const fetchAllTags = () => axios.get<Tag[]>(ENDPOINTS.getAllTags)

	return { fetchAllTags };
};
export default useTagAPI;