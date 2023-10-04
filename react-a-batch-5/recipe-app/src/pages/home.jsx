import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../configs/firebase";

export function Home() {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchPost = async () => {
			await getDocs(collection(db, "recipe")).then((querySnapshot) => {
				const newData = querySnapshot.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setRecipes(newData);
				console.log(newData);
			});
		};
		fetchPost();
	}, []);

	return (
		<div>
			<Link to="/add-recipe">Add Recipe</Link>
			<Link to="/login">Login</Link>
		</div>
	);
}
