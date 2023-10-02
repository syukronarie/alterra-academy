import React, { useLayoutEffect } from "react";
import auth from "../../utils/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import { selectTheme, toggleThemeMode } from "../../store/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

const breadcrumbs = [
	{
		path: "/",
		name: "Home",
		description: "Articles",
	},
	{
		path: "/articles",
		name: "Article",
		description: "Article details",
	},
	{
		path: "/add-article",
		name: "Add article",
		description: "Add new article",
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
			<Button onClick={() => auth.logout()}>Logout</Button>
			<Button
				style={{ fontSize: "24px" }}
				onClick={() => dispatch(toggleThemeMode())}
			>
				{mode === "dark" ? "🌝" : "🌚"}
			</Button>
			<Button
				style={{ fontSize: "24px" }}
				onClick={() => dispatch(toggleThemeMode())}
			>
				<Link to="/add-article">add new Article</Link>
			</Button>
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
