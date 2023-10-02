import React from "react";
import AddArticlePage from "../pages/articles/add-article-page";
import ArticleDetailsPage from "../pages/articles/article-details-page";
import ContactUsPage from "../pages/contact-us-page";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import NotFound from "../pages/not-found";
import PrivateRoute from "./private-route";
import ProtectedRoute from "./protected-route";
import { Route, Routes } from "react-router-dom";

export default function Routers() {
	return (
		<Routes>
			<Route path="/" element={<PrivateRoute />}>
				<Route index element={<HomePage />} />
				<Route path="/articles/:id" element={<ArticleDetailsPage />} />
				<Route path="/add-article" element={<AddArticlePage />} />
				<Route path="/contact-us" element={<ContactUsPage />} />
			</Route>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/login" element={<LoginPage />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
