import React from "react";
import "./feed.scss";
import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";
type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};
export default Feed;
