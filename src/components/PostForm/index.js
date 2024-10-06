import React, { useRef, useState } from "react";
import "./index.css";

export default function PostFrom({ addPost }) {
  //let [postChg, setpostChg] = useState("");
  //   let changes = (e) => {
  //     setpostChg(e.target.value);
  //   };
  let title = useRef();
  let restPost = () => {
    title.current.value = "";
  };

  let upload = (e) => {
    e.preventDefault();

    // {
    //     title: "Post Three",
    //     id: 3,
    //   },

    let uploadPost = {
      title: title.current.value,
      id: Math.floor(Math.random() * 1000),
    };
    restPost();
    addPost(uploadPost);
  };

  return (
    <form className="form-container" onSubmit={upload}>
      <div className="post-form">
        <label htmlFor="">Title</label>
        <input
          type="text"
          // onChange={(e) => setpostChg(e.target.value)}
          // value={postChg}
          ref={title}
        />
      </div>
      <div className="post-form">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
