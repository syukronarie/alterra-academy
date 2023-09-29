import React from "react";
import { useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import { APIAuth } from "../apis/APIAuth";

export default function LoginPage() {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const { username, password } = Object.fromEntries(formData);
		APIAuth.login({ username, password }).then(async (response) => {
			console.log(response);
			if (response.status === 400) {
				return alert("your username or password is wrong");
			}

			const { token } = response.data;
			auth.storeAuthCredential(token);
			return navigate("/");
		});
	};

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="username"
					name="username"
					placeholder="enter your username"
				/>
				<input
					type="password"
					name="password"
					placeholder="enter your password"
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
