import React, { useEffect, useState } from "react";

export default function InputCategory({ value, handleCategory }) {
	const [categories, setCategories] = useState();

	useEffect(() => {
		fetch("https://dummyjson.com/products/categories")
			.then((res) => res.json())
			.then(setCategories);
	}, []);

	return (
		<>
			<label htmlFor="category">Category</label>
			<select
				id="category"
				name="category"
				value={value}
				defaultValue={""}
				onChange={handleCategory}
			>
				{categories?.map((category) => (
					<option key={category} value={category}>
						{category}
					</option>
				))}
			</select>
		</>
	);
}
