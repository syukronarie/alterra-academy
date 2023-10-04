import React from "react";
import { authService } from "../configs/auth";
import { Outlet, useLocation } from "react-router-dom";

const breadcrumbs = [
	{
		path: "/",
		name: "Home",
		description: "Recipes",
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
	return (
		<nav>
			<button onClick={() => authService.logOut()}>Logout</button>
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

export function Layout() {
	return (
		<div>
			<Navbar />
			<Header />
			<Content />
		</div>
	);
}
