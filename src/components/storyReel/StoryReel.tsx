import React from "react";
import "./storyreel.scss";
import Story from "../story/Story";
type StoryReelProps = {};

const StoryReel: React.FC<StoryReelProps> = () => {
  return (
    <div className="StoryReel">
      <Story
        backImg="https://4kwallpapers.com/images/wallpapers/rose-flower-fire-burning-dark-2732x2732-464.jpeg"
        profileImg="https://edge.99images.com/photos/wallpapers/flowers/black-rose%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-5fgcw.jpg"
        title="shokhrukh"
      />
      <Story
        backImg="https://4kwallpapers.com/images/wallpapers/rose-flower-fire-burning-dark-2732x2732-464.jpeg"
        profileImg="https://edge.99images.com/photos/wallpapers/flowers/black-rose%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-5fgcw.jpg"
        title="shokhrukh"
      />
      <Story
        backImg="https://4kwallpapers.com/images/wallpapers/rose-flower-fire-burning-dark-2732x2732-464.jpeg"
        profileImg="https://edge.99images.com/photos/wallpapers/flowers/black-rose%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-5fgcw.jpg"
        title="shokhrukh"
      />
      <Story
        backImg="https://4kwallpapers.com/images/wallpapers/rose-flower-fire-burning-dark-2732x2732-464.jpeg"
        profileImg="https://edge.99images.com/photos/wallpapers/flowers/black-rose%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-5fgcw.jpg"
        title="shokhrukh"
      />
    </div>
  );
};
export default StoryReel;
