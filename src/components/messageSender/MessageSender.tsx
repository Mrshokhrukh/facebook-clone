import React from "react";
import "./msgSender.scss";
import { Avatar } from "@mui/material";
type MessageSenderProps = {};

const MessageSender: React.FC<MessageSenderProps> = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="msgSender_top">
        <Avatar />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="What's on your mind ?" />
          <input type="text" placeholder="img url" />
          <button>Post</button>
        </form>
      </div>
      <div className="msgSender_bottom"></div>
    </div>
  );
};
export default MessageSender;
