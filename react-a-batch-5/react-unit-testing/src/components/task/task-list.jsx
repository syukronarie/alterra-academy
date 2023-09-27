import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTask, deleteTask, selectTasks } from "../../store/tasks";

export default function TaskList() {
	// const tasks = useSelector(selectTasks);
	const tasks = [
		{ id: 0, text: "Philosopher’s Path", done: true },
		{ id: 1, text: "Visit the temple", done: false },
		{ id: 2, text: "Drink matcha", done: false },
	];

	return (
		<ul>
			{tasks.map((task) => (
				<li data-testid="task-item" key={task.id}>
					<Task task={task} />
				</li>
			))}
		</ul>
	);
}

function Task({ task }) {
	const [isEditing, setIsEditing] = useState(false);
	// const dispatch = useDispatch();

	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						// dispatch(
						// 	changeTask({
						// 		id: task.id,
						// 		text: e.target.value,
						// 	})
						// );
					}}
				/>
				<button onClick={() => setIsEditing(false)}>Save</button>
			</>
		);
	} else {
		taskContent = (
			<>
				{task.text}
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}
	return (
		<label>
			<input
				type="checkbox"
				checked={task.done}
				onChange={(e) => {
					// dispatch(changeTask({ id: task.id, done: e.target.checked }));
				}}
			/>
			{taskContent}
			<button
				onClick={() => {
					// dispatch(deleteTask({ id: task.id }));
				}}
			>
				Delete
			</button>
		</label>
	);
}
