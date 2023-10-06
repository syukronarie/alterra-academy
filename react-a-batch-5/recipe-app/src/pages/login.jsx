import { APIAuth } from "../apis/APIAuth";
import { auth } from "../configs/firebase";
import { Button, Col, Form, Input, Row, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

export const Login = () => {
	const [form] = useForm();

	const navigate = useNavigate();

	console.log(auth?.currentUser?.email);

	const signIn = async ({ email, password }) => {
		try {
			await APIAuth.signInWithCredentials({ email, password });
			message.success("login successful");
			navigate("/");
		} catch (error) {
			console.log("test");
			message.error("login failed. your email or password is wrong!");
		}
	};

	const signInWithGoogle = async () => {
		try {
			await APIAuth.signInWithGoogleOAuth();
			message.success("login successful");
			navigate("/");
		} catch (error) {
			console.log("test");
			message.error("login failed. google oauth is failed");
		}
	};

	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				display: "flex",
				alignItems: "center",
			}}
		>
			<Row style={{ width: 400, margin: "auto" }}>
				<Col
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: 10,
					}}
				>
					<Form form={form} onFinish={signIn}>
						<Form.Item name="email" rules={[{ required: true, type: "email" }]}>
							<Input placeholder="Email.." />
						</Form.Item>
						<Form.Item name="password" rules={[{ required: true }]}>
							<Input type="password" placeholder="Password.." />
						</Form.Item>
						<div>
							<Button name="signIn" htmlType="submit">
								Sign in
							</Button>
							<Button
								htmlType="button"
								onClick={signInWithGoogle}
								icon={<GoogleOutlined />}
							>
								Sign in with google
							</Button>
						</div>
					</Form>
				</Col>

				<Col>
					Doesn't have an account?{" "}
					<Link to="/signup">
						<Button type="link" style={{ padding: 0 }}>
							Sign up
						</Button>
					</Link>
				</Col>
			</Row>
		</div>
	);
};
