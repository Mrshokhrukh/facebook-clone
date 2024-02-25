import React, { useEffect, useState } from "react";
import "./storyModal.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import { closeStoryModal } from "../../redux/storyModalSlice";
type StoryModalProps = {};

const StoryModal: React.FC<StoryModalProps> = () => {
  const [filled, setFilled] = useState(0);
  let dispatch = useDispatch();
  const { storyData, isOpen } = useSelector(
    (state: RootState) => state.storyModal
  );

  useEffect(() => {
    if (!isOpen) {
      setFilled(0);
    }
    if (filled < 100 && isOpen) {
      setTimeout(() => {
        setFilled((prev) => (prev += 2));
      }, 52);
    }
  }, [isOpen, filled]);

  return (
    <>
      <div className={isOpen ? "backoFStory open" : "backoFStory"}></div>

      <div className={isOpen ? "story_modal open" : "story_modal"}>
        <div className="story_data">
          <div
            className="storyCloser_btn"
            onClick={() => dispatch(closeStoryModal())}
          >
            <CloseIcon />
          </div>

          <img src={storyData?.storyImg} alt="" />
          <div className="progressbar">
            <div
              style={{
                height: "100%",
                width: `${filled}%`,
                backgroundColor: "#2e81f4",
                transition: "width 0.5s",
              }}
            ></div>
          </div>
          <div className="storyProfileData">
            <Avatar src={storyData?.profileImg} />
            <p className="profileName">{storyData?.title}</p>
          </div>
          <div className="replyField">
            <input type="text" placeholder="Reply..." />
            <button className="replyBtn">
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StoryModal;
