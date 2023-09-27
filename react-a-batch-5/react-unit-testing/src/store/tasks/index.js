import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: 0, text: "Philosopher’s Path", done: true },
	{ id: 1, text: "Visit the temple", done: false },
	{ id: 2, text: "Drink matcha", done: false },
];

const taskSlices = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (state, { payload }) => {
			const { id, text } = payload;
			const newTask = {
				id,
				text,
				done: false,
			};
			state.push(newTask);
		},
		changeTask: (state, { payload }) => {
			const { id, text, done } = payload;
			if (text || text === "") {
				state.map((task) => {
					if (task.id === id) {
						task.text = text;
					}
					return task;
				});
			}

			const newDone = typeof done === "undefined" ? false : String(done);
			if (newDone) {
				state.map((task) => {
					if (task.id === id) {
						task.done = done;
					}
					return task;
				});
			}
		},
		deleteTask: (state, { payload }) => {
			const { id } = payload;
			const filteredTask = state.filter((task) => task.id !== id);
			return filteredTask;
		},
	},
});

export const selectTasks = (state) => state.tasks;

export const { addTask, changeTask, deleteTask } = taskSlices.actions;
export default taskSlices.reducer;
