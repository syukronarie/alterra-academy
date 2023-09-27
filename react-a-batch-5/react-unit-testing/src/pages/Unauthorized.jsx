import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
	return (
		<div>
			<h1>Unauthorized</h1>
			<p>401</p>
			<Link to="/login">Please login first</Link>
		</div>
	);
}
