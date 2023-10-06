import { ContainerOutlined } from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";

export function Unauthorized() {
	return (
		<ContainerOutlined>
			<h1>Unauthorized</h1>
			<p>401</p>
			<Link to="/login">Login</Link>
		</ContainerOutlined>
	);
}
