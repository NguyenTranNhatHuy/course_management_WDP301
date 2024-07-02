import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { debounce } from 'lodash';
import './GPT.css';

function GPT({
	apiKey = process.env.REACT_APP_OPENAI_API_KEY,
	aiModel = "gpt-3.5-turbo",
	aiPrompt = "You are Examin-AI developed by Thinh Nguyen Group",
	aiName = "Examin-AI",
	aiMessage = "Hello, I'm Examin-AI, Ask me anything!",
	senderName = "You",
	typingLoad = "Examin-AI is typing...",
	buttonText = "Ask"
}) {
	const [messages, setMessages] = useState([
		{
			message: aiMessage,
			sentTime: "just now",
			sender: aiName,
		},
	]);
	const messagesEndRef = useRef(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	const [isTyping, setIsTyping] = useState(false);

	const fetchData = useCallback(debounce(async () => {
		try {
			const response = await processMessageToHytechAI(messages);
			const content = response.choices[0]?.message?.content;
			if (content) {
				const chatAIResponse = {
					message: content,
					sender: aiName,
				};
				setMessages((prevMessages) => [...prevMessages, chatAIResponse]);
			}
		} catch (error) {
			console.error("Error processing message:", error);
		} finally {
			setIsTyping(false);
		}
	}, 1000), [messages]); // Debounce delay set to 1000ms (1 second)

	useEffect(() => {
		if (isTyping) {
			fetchData();
		}
	}, [isTyping, fetchData]);

	const handleSendMessage = (message) => {
		if (!message.trim()) return;
		const newMessage = {
			message,
			direction: 'outgoing',
			sender: senderName,
		};
		setMessages((prevMessages) => [...prevMessages, newMessage]);
		setIsTyping(true);
	};

	const processMessageToHytechAI = async (chatMessages) => {
		const apiMessages = chatMessages.map((messageObject) => {
			const role = messageObject.sender === aiName ? "assistant" : "user";
			return { role, content: messageObject.message };
		});
		const apiRequestBody = {
			model: aiModel,
			messages: [
				{ role: "system", content: aiPrompt },
				...apiMessages,
			],
		};
		console.log("api key = ", apiKey);
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				"Authorization": `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(apiRequestBody),
		});
		if (!response.ok) {
			throw new Error(`Error: ${response.statusText}`);
		}
		return response.json();
	};

	return (
		<div className="base-container">
			<div className="messages-container">
				{messages.map((message, index) => (
					<div key={index} className={`message-container ${message.sender}`}>
						<div className={message.sender === senderName ? "user" : "HytechAI"}>
							<p className={message.sender === senderName ? "sender-HytechAI" : "sender-user"}>{message.sender}</p>
							<div className={message.sender === senderName ? "message-box-user" : "message-box-HytechAI"}>
								<ReactMarkdown>{message.message}</ReactMarkdown>
							</div>
						</div>
					</div>
				))}
				{isTyping && <div className="typing-message">{typingLoad}</div>}
				<div ref={messagesEndRef} />
			</div>
			<form className="message-form" onSubmit={(e) => {
				e.preventDefault();
				const message = e.target.elements.message.value;
				e.target.elements.message.value = "";
				handleSendMessage(message);
			}}>
				<div className="hytech-ai-main">
					<textarea className="text-input" name="message" placeholder="Type your message..." />
					<button className="send-button" type="submit"><FontAwesomeIcon icon={faPaperPlane} /></button>
				</div>
			</form>
		</div>
	);
}

export default GPT;
