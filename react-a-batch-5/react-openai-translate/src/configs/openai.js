import OpenAI from "openai";

const openAI = new OpenAI({
	apiKey: process.env.REACT_APP_OPEN_AI_KEY,
	dangerouslyAllowBrowser: true,
});

export default openAI;
