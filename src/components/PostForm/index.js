import React, { useState } from "react";
import "./index.css";

export default function PostFrom({ addPost }) {
  let [postChg, setpostChg] = useState("");
  //   let changes = (e) => {
  //     setpostChg(e.target.value);
  //   };

  let restPost = () => {
    setpostChg("");
  };

  let upload = (e) => {
    e.preventDefault();

    // {
    //     title: "Post Three",
    //     id: 3,
    //   },

    let uploadPost = {
      title: postChg,
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
          onChange={(e) => setpostChg(e.target.value)}
          value={postChg}
        />
      </div>
      <div className="post-form">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
