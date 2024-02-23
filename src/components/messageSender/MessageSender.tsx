import React, { useState } from "react";
import "./msgSender.scss";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { db } from "../../firebase";
type MessageSenderProps = {};

const MessageSender: React.FC<MessageSenderProps> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let postId = Math.random();

    try {
      const docData = {
        postDescription: input,
        image: image
          ? image
          : "https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg",
        profileImg: user?.user.photoURL,
        timestamp: Timestamp.fromDate(new Date()),
        username: user?.user.displayName,
        id: postId,
      };

      await setDoc(doc(db, "posts", `${postId}`), docData);
    } catch (e) {
      alert(e);
    }

    setInput("");
    setImage("");
  };

  return (
    <div className="messageSender">
      <div className="msgSender_top">
        <Avatar src={user?.user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What's on your mind ?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
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
