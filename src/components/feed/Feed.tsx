import React, { useEffect, useState } from "react";
import "./feed.scss";
import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";

type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  const postData = useGetPostData();

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <div className="posts_container">
        {postData.data?.map((post, i) => {
          return (
            <Post
              key={i}
              postImg={post.image}
              profileImg={post.profileImg}
              timestamp={post.timestamp}
              username={post.username}
              title={post.postDescription}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Feed;

export function useGetPostData() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchPost = async () => {
      const q = query(collection(db, "posts"));
      const querySnapshot = await getDocs(q);
      let tempArr: any = [];
      querySnapshot.forEach((doc) => {
        tempArr.push({ id: doc.id, ...doc.data() });
      });
      setData(tempArr);
    };
    fetchPost();
  }, []);
  return { data };
}
