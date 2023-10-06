import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../configs/firebase";
import { authService } from "../configs/auth";

export const APIAuth = {
	signInWithCredentials: async ({ email, password }) => {
		try {
			const result = await signInWithEmailAndPassword(auth, email, password);
			const { idToken, refreshToken } = result._tokenResponse;
			authService.storeCredentialsToCookie({ idToken, refreshToken });
			console.log(result);
		} catch (err) {
			console.error(err);
			throw new Error(err);
		}
	},
	signInWithGoogleOAuth: async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider);
			const { oauthAccessToken, refreshToken } = result._tokenResponse;
			authService.storeCredentialsToCookie({ oauthAccessToken, refreshToken });
		} catch (err) {
			console.error(err);
			throw new Error(err);
		}
	},
};
