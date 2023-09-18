import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import InputCategory from "../components/input-category";
import auth from "../utils/auth";

export default function HomePage() {
	const [products, setProducts] = useState();
	const [_payloadSearch, setPayloadSearch] = useState({
		query: "",
		category: "",
	});
	const payloadSearch = useDebounce(_payloadSearch, 1000);

	// const navigate = useNavigate();

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then(setProducts);
	}, []);

	useEffect(() => {
		if (payloadSearch.query)
			fetch(`https://dummyjson.com/products/search?q=${payloadSearch.query}`)
				.then((res) => res.json())
				.then(setProducts);

		if (payloadSearch.category)
			fetch(`https://dummyjson.com/products/category/${payloadSearch.category}`)
				.then((res) => res.json())
				.then(setProducts);
	}, [payloadSearch]);

	// function goToProductDetail(id) {
	// 	navigate(`/products/${id}`, { state: { ok: "hello" } });
	// }

	function handleQuerySearch(e) {
		const newQuerySearch = e.target.value;
		setPayloadSearch({ category: "", query: newQuerySearch });
	}

	function handleCategory(e) {
		const category = e.target.value;
		setPayloadSearch({ query: "", category });
	}

	return (
		<>
			<h1>Homepage</h1>
			<h2>Our Products</h2>

			<button onClick={() => auth.logout()}>Logout</button>

			<div>
				<label htmlFor="querySearch">Search Products</label>
				<input
					id="querySearch"
					type="text"
					name="querySearch"
					value={_payloadSearch.query}
					onChange={handleQuerySearch}
				/>

				<InputCategory
					value={_payloadSearch.category}
					handleCategory={handleCategory}
				/>

				{payloadSearch.query && <h3>Searching for: {payloadSearch.query}</h3>}
				{payloadSearch.category && (
					<h3>Searching for category: {payloadSearch.category}</h3>
				)}
			</div>

			{products ? (
				<div className="products">
					{products.products.map((product) => (
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
				<p>Loading...</p>
			)}
			<Link to="/contact-us">Contact Us</Link>
		</>
	);
}
