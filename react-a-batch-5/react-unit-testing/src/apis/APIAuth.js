import { axiosInstance } from "../configs/axiosInstance";

export const APIAuth = {
	login: async ({ username, password }) => {
		try {
			const result = await axiosInstance.post("/auth/login", {
				username,
				password,
			});
			console.log(result);
			return result;
		} catch (error) {
			console.error(error);
		}
	},
};
