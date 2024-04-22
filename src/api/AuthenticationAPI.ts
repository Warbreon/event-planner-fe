import API from "./Axios";
import { ENDPOINTS } from "./endpoints/Endpoints";

export const authenticateUser = (email: string, password: string) => API.post(ENDPOINTS.authenticate, { email, password });