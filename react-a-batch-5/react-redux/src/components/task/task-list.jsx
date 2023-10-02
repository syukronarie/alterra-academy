import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTask, deleteTask, selectTasks } from "../../store/tasks";

export default function TaskList() {
	const tasks = useSelector(selectTasks);

	return (
		<ul>
			{tasks.map((task) => (
				<li key={task.id}>
					<Task task={task} />
				</li>
			))}
		</ul>
	);
}

function Task({ task }) {
	const [isEditing, setIsEditing] = useState(false);
	const dispatch = useDispatch();

	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						dispatch(
							changeTask({
								id: task.id,
								text: e.target.value,
							})
						);
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
					dispatch(changeTask({ id: task.id, done: e.target.checked }));
				}}
			/>
			{taskContent}
			<button
				onClick={() => {
					dispatch(deleteTask({ id: task.id }));
				}}
			>
				Delete
			</button>
		</label>
	);
}
