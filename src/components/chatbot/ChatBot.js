import React, { useState } from "react";
import "./Chatbot.css";
import { ChatBotWidget } from "chatbot-widget-ui";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: "80%", left: "80%" });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top,
    });
  };
  const fetchData = async (user_id,query) => {
    // Replace with your API URL
    const apiUrl = 'http://localhost:8000/chat';
    
    // Sending query parameters in the URL
    const res = await axios.get(apiUrl, {
      params: {
        user_id,
        query
      }
    })
    console.log(res.data,"ddd")
   return res.data?.response
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        top: `${e.clientY - offset.y}px`,
        left: `${e.clientX - offset.x}px`,
      });
    }
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <>
    <ChatBotWidget
  callApi={async (data) =>{
    return await fetchData('ade',data)
  }}
  primaryColor="red"
  inputMsgPlaceholder="Type your message..."
  chatbotName="Customer Support"
  isTypingMessage="Typing..."
  IncommingErrMsg="Oops! Something went wrong. Try again."
  handleNewMessage={() =>{}}
  chatIcon={<div>O</div>}
/>
       
    </>

  );
};

export default Chatbot;
