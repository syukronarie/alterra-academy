import openAI from "../configs/openai";

export const APIOpenAI = {
	translate: async ({ query = "", language = "English" }) => {
		try {
			const completion = await openAI.chat.completions.create({
				model: "gpt-3.5-turbo",
				messages: [
					{ role: "assistant", content: `translate ${query}?? in ${language}` },
				],
			});
			console.log("translate using open AI successful");
			console.log(completion);
			return completion?.choices?.[0].message.content;
		} catch (err) {
			console.log("translate using open AI failed", err);
			throw new Error(err);
		}
	},
};
