import React, { useEffect, useState } from "react";
import cartDark from "./cart-dark.svg";
import cartLight from "./cart-light.svg";
import { isDarkMode, selectTheme } from "../../store/theme";
import { selectCart } from "../../store/cart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
	const [isShowed, setIsShowed] = useState(false);
	const { mode } = useSelector(selectTheme);
	const { data: products, totalProducts } = useSelector(selectCart);

	function handleMouseEnterAndLeave() {
		setIsShowed(!isShowed);
	}

	useEffect(() => {
		const persistRoot = JSON.parse(localStorage.getItem("persist:root"));
		const cart = JSON.parse(persistRoot.cart);
		console.log({ cart });
	}, []);

	return (
		<>
			<div className="cart-root" onMouseEnter={handleMouseEnterAndLeave}>
				{isDarkMode(mode) ? (
					<img className="cart-image" src={cartLight} alt="cart" />
				) : (
					<img className="cart-image" src={cartDark} alt="cart" />
				)}
				<span className="cart-total">{totalProducts}</span>
			</div>
			{isShowed && (
				<div className="cart-list" onMouseLeave={handleMouseEnterAndLeave}>
					{products.map((product) => (
						<div key={`${product.title}-${product.id}`}>
							<Link to={`/products/${product.id}`}>
								<h4>{product.title}</h4>
							</Link>
							<p>$ {product.price}</p>
						</div>
					))}
				</div>
			)}
		</>
	);
}
