import React from "react";
import Markdown from "react-markdown";
import "./ChatBubble.css";

const ChatBubble = ({ content, role }) => {
	return (
		<div className={`chat-bubble ${role === "user" ? "user" : "ai"}`}>
			<Markdown>{content}</Markdown>
		</div>
	);
};

export default ChatBubble;
