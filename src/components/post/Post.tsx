import React from "react";
import "./post.scss";
import { Avatar, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
type Reactions = {
  likes: string | number;
  shares: string | number;
  comments: [];
};

type PostProps = {
  postImg: string;
  profileImg: string;
  timestamp: any;
  username: string;
  title: string;
  reactions?: Reactions[];
};

const Post: React.FC<PostProps> = ({
  timestamp,
  username,
  profileImg,
  postImg,
  title,
}) => {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profileImg} className="post_avatar" />
        <div className="top_info">
          <div>
            <h3>{username}</h3>
            <p className="timestamp">
              {new Date(timestamp?.toDate()).toUTCString()}
            </p>

          </div>
          <div>
            <IconButton>
              <MoreHorizIcon className="threeDots" />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="post_body">
        <p className="title">{title}</p>
        <div className="post_img">
          <img src={postImg} alt="" />
        </div>
      </div>
      <div className="post_bottom">
        <div className="post_action">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post_action">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post_action">
          <SendIcon />
          <p>Share</p>
        </div>
        <div className="post_action">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};
export default Post;
