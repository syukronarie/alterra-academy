import { auth, googleProvider } from "../configs/firebase";
import {
	signInWithEmailAndPassword,
	signInWithPopup,
	// signOut,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../configs/auth";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	console.log(auth?.currentUser?.email);

	const signIn = async () => {
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			const { idToken, refreshToken } = result._tokenResponse;
			authService.storeCredentialsToCookie({ idToken, refreshToken });
			navigate("/");
		} catch (err) {
			alert(err);
			console.error(err);
		}
	};
	const signInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const { oauthAccessToken, refreshToken } = result._tokenResponse;
			authService.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
			navigate("/");
		} catch (err) {
			alert(err);
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
			<button onClick={signIn}>Sign in</button>
			<button onClick={signInWithGoogle}>Sign in with google</button>
			<button>
				<Link to="/signup">Sign up</Link>
			</button>
		</div>
	);
};
