import React from "react";
import "./storyreel.scss";
import Story from "../story/Story";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { stories } from "../../assets/data/stories";

type StoryReelProps = {};

const StoryReel: React.FC<StoryReelProps> = () => {
  return (
    <div className="StoryReel">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {stories.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Story
                backImg={item.storyImg}
                profileImg={item.profileImg}
                title={item.title}
                id={item.id}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default StoryReel;
