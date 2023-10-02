import Cookies from "js-cookie";

const auth = {
	isAuthenticated: () => {
		// return Cookies.get("token");
		return "secretKey";
	},
	storeAuthCredential: (token) => {
		return Cookies.set("token", token);
	},
	logout: () => {
		Cookies.remove("token");
		window.location.href = "/login";
	},
};

export default auth;
