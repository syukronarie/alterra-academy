import React from "react";
import AddTask from "../components/task/add-task";
import TaskList from "../components/task/task-list";

export default function TaskPage() {
	return (
		<div>
			<AddTask />
			<TaskList />
		</div>
	);
}
