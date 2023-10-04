import React from "react";
import { authService } from "../configs/auth";
import { Outlet } from "react-router-dom";
import { Layout } from "../components/layout";
import { Unauthorized } from "../pages/Unauthorized";

export function PrivateRoute() {
	if (authService.isAuthorized())
		return (
			<Layout>
				<Outlet />
			</Layout>
		);

	return <Unauthorized />;
}
