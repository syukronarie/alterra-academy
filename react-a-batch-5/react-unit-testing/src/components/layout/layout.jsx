import React, { useLayoutEffect } from "react";
import auth from "../../utils/auth";
import { Cart } from "../cart";
import { Outlet, useLocation } from "react-router-dom";
import { selectTheme, toggleThemeMode } from "../../store/theme";
import { useDispatch, useSelector } from "react-redux";

const breadcrumbs = [
	{
		path: "/",
		name: "Home",
		description: "Our products",
	},
	{
		path: "/products",
		name: "Product",
		description: "Product details",
	},
];

function Header() {
	const location = useLocation();

	function checkPathLocation() {
		console.log(location.pathname);
		return breadcrumbs.find((val) =>
			val.path.includes(location.pathname.split("/")[1])
		);
	}

	const path = checkPathLocation();

	return (
		<header>
			{path ? (
				<>
					<h1>{path.name}</h1>
					<h2>{path.description}</h2>
				</>
			) : null}
		</header>
	);
}

function Navbar() {
	const { mode } = useSelector(selectTheme);
	const dispatch = useDispatch();

	return (
		<nav>
			<button onClick={() => auth.logout()}>Logout</button>
			<button
				style={{ fontSize: "24px" }}
				onClick={() => dispatch(toggleThemeMode())}
			>
				{mode === "dark" ? "🌝" : "🌚"}
			</button>
			<Cart />
		</nav>
	);
}

function Content() {
	return (
		<main>
			<Outlet />
		</main>
	);
}

export default function Layout() {
	const { mode } = useSelector(selectTheme);

	useLayoutEffect(() => {
		const element = document.body;
		if (mode === "dark") {
			element.classList.add("theme-dark");
		} else {
			element.classList.remove("theme-dark");
		}
	}, [mode]);

	return (
		<div>
			<Navbar />
			<Header />
			<Content />
		</div>
	);
}
