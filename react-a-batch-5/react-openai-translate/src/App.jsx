import { useEffect, useState } from "react";
import "./App.css";
import { APIOpenAI } from "./apis/APIOpenAI";
import { message } from "antd";

function App() {
	const [result, setResult] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const payload = Object.fromEntries(formData);
		setIsLoading(true);
		APIOpenAI.translate(payload)
			.then((response) => {
				setResult(response);
				setIsLoading(false);
			})
			.catch((err) => {
				console.error(err);
				message.error(err);
			});
	};

	useEffect(() => {
		console.log(result);
	}, [result]);

	return (
		<div className="App">
			<h1>Translate</h1>
			<form onSubmit={handleSubmit}>
				<input name="query" placeholder="please type..." />
				<select name="language">
					<option value="English">English</option>
					<option value="Spanish">Spanish</option>
					<option value="Arabic">Arabic</option>
					<option value="French">French</option>
					<option value="Hindi">Hindi</option>
					<option value="Portuguese">Portuguese</option>
				</select>
				<button type="submit">Translate</button>
			</form>

			<br />

			<div>
				{result && <h3>Translation</h3>}
				{isLoading && <p>generating....</p>}
				{result && !isLoading && <p>{result}</p>}
			</div>
		</div>
	);
}

export default App;
