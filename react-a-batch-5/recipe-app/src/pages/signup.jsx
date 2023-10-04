import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	console.log(auth?.currentUser?.email);

	const createAccount = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
			<input
				type="password"
				placeholder="Password.."
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={createAccount}>Sign up</button>
		</div>
	);
};
