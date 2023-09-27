import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

export default function HomePage() {
	const [state, setState] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then(setState);
	}, []);

	return (
		<div>
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
							<button onClick={() => dispatch(addToCart(product))}>
								+ cart
							</button>
						</div>
					))}
				</div>
			) : (
				<p>Loading...</p>
			)}
			<div>{}</div>
			<Link to="/contact-us">Contact Us</Link>
		</div>
	);
}
