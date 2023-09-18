import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

export default function HomePage() {
	const [state, setState] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then(setState);
	}, []);

	return (
		<div>
			<h1>Homepage</h1>
			<h2>Our Products</h2>
			<button onClick={() => auth.logout()}>Logout</button>
			{state ? (
				<div className="products">
					{state.products.map((product) => (
						<div className="products_item" key={product.id}>
							<Link to={`/products/${product.id}`}>
								<h3>{product.title}</h3>
							</Link>
							<p>{product.category}</p>
							<img src={product.thumbnail} alt={product.title} />
							<p>Price ${product.price}</p>
						</div>
					))}
				</div>
			) : (
				<p>Loading bos</p>
			)}
			<div>{}</div>
			<Link to="/contact-us">Contact Us</Link>
		</div>
	);
}
