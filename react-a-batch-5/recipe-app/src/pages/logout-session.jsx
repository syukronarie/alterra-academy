import { Button } from "antd";
import { Link } from "react-router-dom";

export function LogoutSession(props) {
	return (
		<div>
			<h2>440 Login Time-out</h2>
			<p>
				The client's session has expired and must{" "}
				<Link to="/login">
					<Button type="link" style={{ padding: 0 }}>
						Login
					</Button>
				</Link>{" "}
				again.
			</p>
		</div>
	);
}
