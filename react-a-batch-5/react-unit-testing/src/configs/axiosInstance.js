import axios from "axios";
import { CONST } from "../utils/constants";

export const axiosInstance = axios.create({
	baseURL: CONST.BASE_URL_API,
});
