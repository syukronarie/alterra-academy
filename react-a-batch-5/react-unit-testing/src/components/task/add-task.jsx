import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasks";

export default function AddTask() {
	const [text, setText] = useState("");
	// const dispatch = useDispatch();

	return (
		<>
			<input
				placeholder="Add task"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<button
				onClick={() => {
					setText("");
					// dispatch(addTask({ id: nextId++, text }));
				}}
			>
				Add
			</button>
		</>
	);
}

let nextId = 3;
