import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../configs/firebase";

export class AuthService {
	isAuthorized() {
		if (this.getToken() || this.getRefreshToken()) return true;
		return false;
	}

	getToken() {
		const token = Cookies.get("idToken") || Cookies.get("oauthAccessToken");
		return token;
	}

	getRefreshToken() {
		return Cookies.get("refreshToken");
	}

	storeCredentialsToCookie({ idToken, oauthAccessToken, refreshToken }) {
		const expires = new Date();
		expires.setSeconds(expires.getSeconds() + 10);
		if (idToken) Cookies.set("idToken", idToken, { expires });
		if (oauthAccessToken)
			Cookies.set("oauthAccessToken", oauthAccessToken, { expires });
		Cookies.set("refreshToken", refreshToken);
	}

	clearCredentialsFromCookie() {
		Cookies.remove("idToken");
		Cookies.remove("oauthAccessToken");
		Cookies.remove("refreshToken");
	}

	async logOut() {
		try {
			await signOut(auth);
			this.clearCredentialsFromCookie();
			window.location.href = "/logoutsession";
		} catch (err) {
			console.error(err);
		}
	}
}
