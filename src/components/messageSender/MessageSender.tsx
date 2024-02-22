import React, { useState } from "react";
import "./msgSender.scss";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
type MessageSenderProps = {};

const MessageSender: React.FC<MessageSenderProps> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const [input, setInput] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="msgSender_top">
        <Avatar src={user.user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What's on your mind ?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Post</button>
        </form>
      </div>
      <div className="msgSender_bottom">
        <div className="msg_share_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="msg_share_option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="msg_share_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
export default MessageSender;
