import axios from "axios";
import { CONST } from "../utils/constants";

export const axiosInstance = axios.create({
	baseURL: CONST.BASE_URL_API,
	headers: {
		"app-id": "624a11d46b0e26728639c458",
	},
});
