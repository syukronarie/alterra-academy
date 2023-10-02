import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: "light",
	lang: "en",
};

export const isDarkMode = (mode) => mode === "dark";

const toggleTheme = createSlice({
	initialState,
	name: "theme",
	reducers: {
		toggleThemeMode: (state) => {
			state.mode = isDarkMode(state.mode) ? "light" : "dark";
		},
	},
});

export const selectTheme = (state) => state.theme;

export const { toggleThemeMode } = toggleTheme.actions;
export default toggleTheme.reducer;
