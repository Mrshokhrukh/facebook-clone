import React, { useState } from "react";
import "./msgSender.scss";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { Avatar } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { db } from "../../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
type MessageSenderProps = {};

const MessageSender: React.FC<MessageSenderProps> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  /**
   * firebase storage for uploading image
   */
  const storage = getStorage();

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let postId = Math.random();
    try {
      // if (image) {
      //   const storageRef = ref(storage, `images/${postId}/${image.name}`);

      //   uploadBytes(storageRef, image).then((snapshot) => {
      //     getDownloadURL(snapshot.ref)
      //       .then((url) => {
      //         setImageUrl(url);
      //       })
      //       .catch((error) => {
      //         alert(error.message);
      //       });
      //   });
      // }

      const docData = {
        postDescription: input,
        image: imageUrl || "",
        profileImg: user?.user.photoURL,
        timestamp: Timestamp.fromDate(new Date()),
        username: user?.user.displayName,
        id: postId,
      };

      await setDoc(doc(db, "posts", `${postId}`), docData);
    } catch (e) {
      alert(e);
    }

    setInput("");
    setImage(null);
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <img src={imageUrl} alt="" />
      <div className="msgSender_top">
        <Avatar src={user?.user.photoURL} />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="What's on your mind ?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            required
          />
          <button>Post</button>
        </form>
      </div>
      <div className="msgSender_bottom">
        <div className="msg_share_option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <label className="msg_share_option img_upload">
          <input type="file" accept="image/*" onChange={handleChangeImg} />

          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </label>

        <div className="msg_share_option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};
export default MessageSender;
