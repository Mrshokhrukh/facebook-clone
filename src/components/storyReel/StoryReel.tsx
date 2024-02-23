import React from "react";
import "./storyreel.scss";
import Story from "../story/Story";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
        <SwiperSlide>
          <Story
            backImg="https://media.wired.com/photos/5ab2ec93491c2d69af421a05/master/pass/ZuckerbergNickTranscript-467503096.jpg"
            profileImg="https://www.rollingstone.com/wp-content/uploads/2021/10/MarkZuckerberg.jpg?w=1600&h=900&crop=1"
            title="zuck"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            backImg="https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/jeff-bezos-inc-1177532680_536417_l2sjya.jpg"
            profileImg="https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds"
            title="jeffbezos"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            backImg="https://m.media-amazon.com/images/I/51Oqx636zeL._AC_UF1000,1000_QL80_.jpg"
            profileImg="https://www.rt.com/static/img/tags/1.jpg"
            title="khabib"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            backImg="https://miro.medium.com/v2/resize:fit:1400/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg"
            profileImg="https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2021-12-16/what-can-you-do-with-javascript-thumb.jpg"
            title="javascript"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Story
            backImg="https://media.wired.com/photos/5ab2ec93491c2d69af421a05/master/pass/ZuckerbergNickTranscript-467503096.jpg"
            profileImg="https://www.rollingstone.com/wp-content/uploads/2021/10/MarkZuckerberg.jpg?w=1600&h=900&crop=1"
            title="zuck"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default StoryReel;
