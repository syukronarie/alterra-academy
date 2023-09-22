import { configureStore } from "@reduxjs/toolkit";
import tasks from "./tasks/task-slices";

const store = configureStore({
	reducer: {
		tasks,
	},
});

export default store;
