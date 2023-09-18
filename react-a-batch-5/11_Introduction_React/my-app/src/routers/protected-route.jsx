import React from "react";
import auth from "../utils/auth";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
	if (!auth.isAuthenticated()) return <Outlet />;
	return <Navigate to="/" />;
}
