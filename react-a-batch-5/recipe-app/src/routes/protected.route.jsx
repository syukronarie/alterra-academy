import React from "react";
import { authService } from "../configs/auth";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
	if (!authService.isAuthorized()) return <Outlet />;
	return <Navigate to="/" />;
}
