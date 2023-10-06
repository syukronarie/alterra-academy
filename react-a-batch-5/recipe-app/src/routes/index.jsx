import React from "react";

import { AddRecipe } from "../pages/add-recipe";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { LogoutSession } from "../pages/logout-session";
import { NotFound } from "../pages/not-found";
import { PrivateRoute } from "./private.route";
import { ProtectedRoute } from "./protected.route";
import { Route, Routes } from "react-router-dom";
import { Signup } from "../pages/signup";
import { Unauthorized } from "../pages/unauthorized";

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
				<Route path="/logoutsession" element={<LogoutSession />} />
			</Route>
			<Route path="*" element={<NotFound />} />
			<Route path="/unauthorized" element={<Unauthorized />} />
		</Routes>
	);
}
