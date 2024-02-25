import { Avatar } from "@mui/material";
import React from "react";
import "./story.scss";
import { useDispatch } from "react-redux";
import { closeStoryModal, openStoryModal } from "../../redux/storyModalSlice";
type StoryProps = {
  backImg: string;
  profileImg: string;
  title: string;
  id: number;
};

const Story: React.FC<StoryProps> = ({ id, profileImg, backImg, title }) => {
  let dispatch = useDispatch();

  const openModal = () => {
    dispatch(openStoryModal(id));
    setTimeout(() => {
      dispatch(closeStoryModal());
    }, 3500);
  };

  return (
    <div
      className="story"
      onClick={openModal}
      style={{ backgroundImage: `url(${backImg})` }}
    >
      <Avatar src={profileImg} className="story_avatar" />
      <h4>{title}</h4>
    </div>
  );
};
export default Story;
