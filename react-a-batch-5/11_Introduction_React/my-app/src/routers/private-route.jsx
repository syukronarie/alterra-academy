import React from "react";
import auth from "../utils/auth";
import Unauthorized from "../pages/Unauthorized";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
	if (auth.isAuthenticated()) return <Outlet />;

	return <Unauthorized />;
	// return <Navigate to="/unauthorized" />;
}
