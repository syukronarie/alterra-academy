import React from "react";
import auth from "../utils/auth";
import Unauthorized from "../pages/Unauthorized";
import { Outlet } from "react-router-dom";
import { Layout } from "../components";

export default function PrivateRoute() {
	if (auth.isAuthenticated())
		return (
			<Layout>
				<Outlet />
			</Layout>
		);

	return <Unauthorized />;
}
