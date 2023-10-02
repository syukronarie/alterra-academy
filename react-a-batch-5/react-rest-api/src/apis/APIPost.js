import { AxiosError } from "axios";
import { axiosInstance } from "../configs/axiosInstance";

export const APIPost = {
	getPosts: async ({ limit, page }) => {
		try {
			const params = {};
			if (limit) params["limit"] = limit;
			if (page) params["page"] = page;
			const result = await axiosInstance.get("/post", { params });
			return result.data;
		} catch (err) {
			if (err instanceof AxiosError) {
				const {
					data: { error },
				} = err.response;
				throw new AxiosError(error);
			}
			throw new Error(err);
		}
	},

	getPostById: async (id) => {
		try {
			const result = await axiosInstance.get(`/post/${id}`);
			return result.data;
		} catch (err) {
			if (err instanceof AxiosError) {
				const {
					data: { error },
				} = err.response;
				throw new AxiosError(error);
			}
			throw new Error(err);
		}
	},
};
