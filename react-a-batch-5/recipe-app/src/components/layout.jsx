import React, { useEffect } from "react";
import { authService } from "../configs/auth";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Button, Image, Row } from "antd";
import { auth } from "../configs/firebase";

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
	useEffect(() => {
		console.log(auth);
	}, []);

	return (
		<Row justify="space-between">
			<div>
				<Link to="/">
					<Button>Home</Button>
				</Link>
				<Link to="/add-recipe">
					<Button>Add Recipe</Button>
				</Link>
			</div>

			<div>
				{auth.currentUser && (
					<>
						<Image width={30} src={auth.currentUser.photoURL} />
						<span>{auth.currentUser.displayName}</span>
					</>
				)}
				<Button type="link" onClick={() => authService.logOut()}>
					Logout
				</Button>
			</div>
		</Row>
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
