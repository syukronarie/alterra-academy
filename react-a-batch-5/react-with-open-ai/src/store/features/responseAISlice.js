import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openAI } from "../../apis/APIOpenAI";

export const getResponse = createAsyncThunk(
	"api/getResponse",
	openAI.getResponseAI
);

const initialState = {
	messageHistory: [],
	isLoading: false,
};

const responseSlice = createSlice({
	name: "responseAI",
	initialState,
	reducers: {
		addMessage: (state, action) => {
			const { message, senderIsAI } = action.payload;
			addMessageHistory({ state, message, senderIsAI });
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getResponse.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getResponse.fulfilled, (state, action) => {
				state.isLoading = false;
				const { choices } = action.payload;
				const { content, role } = choices[0].message;
				addMessageHistory({
					state,
					message: content,
					senderIsAI: role === "assistant" ? true : false,
				});
			})
			.addCase(getResponse.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export default responseSlice.reducer;
export const { addMessage } = responseSlice.actions;

export const selectResponseAI = (state) => state.responseAI;

function addMessageHistory({ state, message, senderIsAI }) {
	const CURRENT_CONVERSATION_ID = Math.random() * 9;
	state.messageHistory.push({
		content: message,
		role: senderIsAI ? "assistant" : "user",
	});
	localStorage[CURRENT_CONVERSATION_ID] = JSON.stringify(state.messageHistory);
}
