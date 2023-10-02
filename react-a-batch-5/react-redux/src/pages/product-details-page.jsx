import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function ProductDetailsPage() {
	const [product, setProduct] = useState();
	const { id } = useParams();
	const location = useLocation();

	console.log(location);

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${id}`)
			.then((res) => res.json())
			.then(setProduct);
	}, [id]);

	return (
		<div>
			{product ? (
				<div>
					<h2>{product.title}</h2>
					<h2>{product.description}</h2>
					<p>{product.category}</p>
					<img src={product.thumbnail} alt={product.title} />
					<p>Price ${product.price}</p>
					<p>Rating {product.rating}</p>
				</div>
			) : (
				<p>Loading..</p>
			)}
			<Link to="/">Back to home</Link>
		</div>
	);
}
