import axios from "axios";
import { extractAccessToken } from "../utils/schemas/ExtractAccessToken";

const API = axios.create({
  baseURL: "https://raisav-api.devbstaging.com/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${extractAccessToken()}`,
  }
});

export default API;
