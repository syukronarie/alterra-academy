import {
	addDoc,
	collection,
	getDocs,
	doc,
	deleteDoc,
} from "firebase/firestore";
import { db } from "../configs/firebase";
import { message } from "antd";

export const APIRecipe = {
	getRecipes: async () => {
		try {
			const result = await getDocs(collection(db, "recipe"));
			const recipes = result.docs.map((doc) => ({
				...doc.data(),
				id: doc.id,
			}));
			console.log("API calls successful: ", result.id);
			return recipes;
		} catch (error) {
			message.error("login failed. your email or password is wrong!");
			console.error(error);
		}
	},
	addRecipe: async (recipe) => {
		try {
			const docRef = await addDoc(collection(db, "recipe"), recipe);
			console.log("Document written with ID: ", docRef.id);
			return docRef;
		} catch (e) {
			console.error("Error adding document: ", e);
			throw new Error(e);
		}
	},
	deleteRecipe: async (id) => {
		try {
			console.log(id);
			const recipeRef = doc(db, "recipe", id);
			await deleteDoc(recipeRef);
			return "Successfully deleted recipe";
		} catch (e) {
			console.error("Error deleting document: ", e);
			throw new Error(e);
		}
	},
};
