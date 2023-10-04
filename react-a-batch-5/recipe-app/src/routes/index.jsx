import React from "react";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { PrivateRoute } from "./private.route";
import { ProtectedRoute } from "./protected.route";
import { Route, Routes } from "react-router-dom";
import { Signup } from "../pages/signup";
import { AddRecipe } from "../pages/add-recipe";

export default function Routers() {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute />}>
				<Route index element={<Home />} />
				<Route path="/add-recipe" element={<AddRecipe />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Route>
		</Routes>
	);
}
