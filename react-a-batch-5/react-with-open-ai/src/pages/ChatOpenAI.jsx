import React, { useEffect, useState } from "react";
import ChatBubble from "../components/ChatBubble";

import "./ChatOpenAI.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Spin } from "antd";
import {
	addMessage,
	getResponse,
	selectResponseAI,
} from "../store/features/responseAISlice";
import { useSelector, useDispatch } from "react-redux";

export default function ChatOpenAI() {
	const { messageHistory, data, isLoading } = useSelector(selectResponseAI);
	const dispatch = useDispatch();

	const [query, setQuery] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(addMessage({ message: query, senderIsAI: false }));
		console.log({ messageHistory });
		setQuery("");
	};

	useEffect(() => {
		const length = messageHistory.length;
		if (length !== 0 && length % 2 !== 0) dispatch(getResponse(messageHistory));
	}, [dispatch, messageHistory]);

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
			/>
			<div className="column">
				<button
					style={{ marginLeft: "10px", marginTop: "10px" }}
					// onClick={handleBack}
				>
					<i className="fa-solid fa-arrow-left"></i>
				</button>
				<h2 style={{ textAlign: "center" }}>AI Chat</h2>
			</div>
			<div className="mainContainer">
				<div className="chatContainer">
					<div className="chatMessage">
						{messageHistory.map((message, index) => (
							<ChatBubble
								key={index}
								content={message.content}
								role={message.role}
							/>
						))}
					</div>
					<Spin
						spinning={isLoading}
						size="large"
						// tip="Loading..."
						style={{ marginTop: "5px" }}
					></Spin>
				</div>
			</div>
			<div className="inputContainer">
				<form>
					<div className="inputWrapper">
						<div className="inputWithIcon">
							<textarea
								name="input"
								className="form-control"
								placeholder="Masukkan input Anda"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							></textarea>
							<button onClick={handleSubmit}>
								<i className="fas fa-paper-plane"></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
