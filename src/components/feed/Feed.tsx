import React, { useEffect, useState } from "react";
import "./feed.scss";
import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase";
type FeedProps = {};

const Feed: React.FC<FeedProps> = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const get = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    get();
    // try {
    //   const fetchPost = async () => {
    //     await getDocs(collection(db, "posts")).then((querySnapshot) => {

    //       const newData = querySnapshot.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id,
    //       }));
    //       setPosts(newData);
    //       console.log(posts, newData);
    //     });
    //   };
    //   fetchPost();
    // } catch (e) {
    //   console.log(e);
    // }
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <div className="posts_container">
        <Post
          postImg="https://media.istockphoto.com/id/174931919/photo/grunge-wall.jpg?s=612x612&w=0&k=20&c=0hlIiaVkxM_aW24EJSC-QXaF6hGekqLnMtN5IkLs2rc="
          profileImg="https://media.licdn.com/dms/image/D4D03AQFLFiJv7N3DVw/profile-displayphoto-shrink_800_800/0/1687244705060?e=2147483647&v=beta&t=zKrgnnbb9ZnJfXlGLorWLBktIVMroA-9sJ_-nQQQr2I"
          timestamp="12/03/2024"
          username="shokhrukh"
          title="hello world"
        />
        <Post
          postImg="https://media.istockphoto.com/id/174931919/photo/grunge-wall.jpg?s=612x612&w=0&k=20&c=0hlIiaVkxM_aW24EJSC-QXaF6hGekqLnMtN5IkLs2rc="
          profileImg="https://media.licdn.com/dms/image/D4D03AQFLFiJv7N3DVw/profile-displayphoto-shrink_800_800/0/1687244705060?e=2147483647&v=beta&t=zKrgnnbb9ZnJfXlGLorWLBktIVMroA-9sJ_-nQQQr2I"
          timestamp="12/03/2024"
          username="shokhrukh"
          title="hello world"
        />
        <Post
          postImg="https://media.istockphoto.com/id/174931919/photo/grunge-wall.jpg?s=612x612&w=0&k=20&c=0hlIiaVkxM_aW24EJSC-QXaF6hGekqLnMtN5IkLs2rc="
          profileImg="https://media.licdn.com/dms/image/D4D03AQFLFiJv7N3DVw/profile-displayphoto-shrink_800_800/0/1687244705060?e=2147483647&v=beta&t=zKrgnnbb9ZnJfXlGLorWLBktIVMroA-9sJ_-nQQQr2I"
          timestamp="12/03/2024"
          username="shokhrukh"
          title="hello world"
        />
      </div>
    </div>
  );
};
export default Feed;
