import axios from "axios";
import { authService } from "./auth";

export const axiosInstance = axios.create({
	baseURL: "https://dummyapi.io/data/v1/",
	headers: {
		"app-id": "624a11d46b0e26728639c458",
	},
});

axiosInstance.interceptors.request.use((config) => {
	const token = authService.getToken();
	console.log(token);

	console.log(config);
	if (token) config.headers["Authorization"] = `Bearer ${token}`;

	if (!token) {
		console.log("lu butuh hit api refreshtoken");
		// !warning: this is coming from API refresh token
		const idToken = "thisisnewtoken";
		const refreshToken = "thisisnewtoken";
		config.headers["Authorization"] = `Bearer ${idToken}`;
		authService.storeCredentialsToCookie({ idToken, refreshToken });
		console.log(config);
	}
	return config;
});

// axiosInstance.interceptors.response.use((config) => {
// })

// function requestHandler()
