import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIPost } from "../../apis/APIPost";

export const fetchGetPostById = createAsyncThunk(
	"fetch/getPost",
	APIPost.getPostById
);

const initialState = {
	message: "",
	status: "idle",
	data: null,
};

const postsSlice = createSlice({
	name: "post",
	initialState,
	extraReducers: (builder) => {
		builder.addCase("fetch/getPost/pending", (state) => {
			state.status = "loading";
			state.message = "";
		});

		builder.addCase("fetch/getPost/fulfilled", (state, { payload }) => {
			state.status = "success";
			state.data = payload;
		});

		builder.addCase("fetch/getPost/rejected", (state, { error }) => {
			state.status = "failed";
			state.message = error.stack;
		});
	},
});

export const selectPost = (state) => state.post;

export default postsSlice.reducer;
