import { openai } from "../configs/openai";

export const openAI = {
	getResponseAI: async (messages) => {
		try {
			const response = await openai.chat.completions.create({
				messages,
				model: "gpt-3.5-turbo",
			});

			return response;
		} catch (error) {
			throw new Error(error);
		}
	},
};
