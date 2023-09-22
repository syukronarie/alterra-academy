import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";
import ContactUsPage from "../pages/contact-us-page";
import ProductDetailsPage from "../pages/product-details-page";
import LoginPage from "../pages/login-page";
import PrivateRoute from "./private-route";
import ProtectedRoute from "./protected-route";
import TaskPage from "../pages/task-page";

export default function Routers() {
	return (
		<Routes>
			<Route path="/contact-us" element={<ContactUsPage />} />
			<Route path="/" element={<PrivateRoute />}>
				<Route index element={<HomePage />} />
				<Route path="/products/:id" element={<ProductDetailsPage />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/login" element={<LoginPage />} />
			</Route>
			<Route path="/task" element={<TaskPage />} />
		</Routes>
	);
}
