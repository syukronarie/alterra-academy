// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC40i55fm6pY14vgnDHDomLy2VEFnYCoks",
	authDomain: "recipe-search-app-6f261.firebaseapp.com",
	projectId: "recipe-search-app-6f261",
	storageBucket: "recipe-search-app-6f261.appspot.com",
	messagingSenderId: "403207297124",
	appId: "1:403207297124:web:df8dbf6ab2e3ffeb3c2771",
	measurementId: "G-1BHVPNFXEK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
