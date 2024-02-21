import { Avatar } from "@mui/material";
import React from "react";
import "./story.scss";
type StoryProps = {
  backImg: string;
  profileImg: string;
  title: string;
};

const Story: React.FC<StoryProps> = ({ profileImg, backImg, title }) => {
  return (
    <div className="story" style={{ backgroundImage: `url(${backImg})` }}>
      <Avatar src={profileImg} className="story_avatar"/>
      <h4>{title}</h4>
    </div>
  );
};
export default Story;
