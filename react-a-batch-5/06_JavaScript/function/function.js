const todos = [
	{ id: 1, task: "HTML I", isCompleted: true },
	{ id: 2, task: "CSS", isCompleted: true },
	{ id: 3, task: "Responsive design", isCompleted: true },
	{ id: 4, task: "Git", isCompleted: true },
	{ id: 5, task: "JavaScript I", isCompleted: true },
	{ id: 6, task: "JavaScript II", isCompleted: false },
];

function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Student.prototype.getFullName = function () {
	return this.firstName + " " + this.lastName;
};

const student = new Student("Angga", "Saputra");
console.log(student.getFullName());

// function declaration;
/**
 * @param {Object} todo Todo;
 * @param {string} todo.task;
 * @param {boolean} todo.isCompleted ;
 * @returns {Array} todo[] todos
 */
function addTodo(todo) {
	if (!todo) throw new Error("todo should be used todo type");
	const todosLength = todos.length;
	const newTodo = { id: todosLength + 1, ...todo };
	return todos.push(newTodo);
}

// function expression
/**
 * @param {number} id id of todo;
 * @returns {Array} todo[] todos
 */
const updateTodo = function (id) {
	if (!id && isNaN(id)) return;
	todos.map((todo) => {
		if (todo.id === id) todo.isCompleted = !todo.isCompleted;
		return todos;
	});
	return todos;
};

console.log({ todos });

addTodo({ task: "JS III", isCompleted: false });

console.log({ todos });

updateTodo(7);

console.log({ todos });

// arrow function
const deleteTodo = (id) => {
	if (!id && isNaN(id)) throw new Error("todo should be used todo type");
	todos.splice(
		todos.findIndex((e) => e.id === id),
		1
	);
	return todos;
};

deleteTodo(5);

console.log({ todos });

const allStatus = true;

// IIFE
// anonymous arrow function
((allStatus) => {
	todos.map((todo) => {
		todo.isCompleted = allStatus;
		return todo;
	});
})(allStatus);

console.log(todos);
