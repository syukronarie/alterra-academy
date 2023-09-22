import React, { useState } from "react";
import Routers from "./routers";

export default function App() {
	const [count, setCount] = useState(0);

	function handleIncrement(e) {
		setCount((n) => n + 1);
	}

	return (
		<Routers />
		// <div>
		// 	<h1>Hello</h1>
		// 	<Count handleIncrement={handleIncrement} count={count} />
		// </div>
	);
}

function Count({ count, handleIncrement }) {
	return (
		<div>
			<h1>Count {count}</h1>
			<button onClick={handleIncrement}>increment</button>
		</div>
	);
}
