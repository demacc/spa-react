import React, { useState } from "react";
import "./index.css";

export default function PostFrom({ addPost }) {
  let [postChg, setpostChg] = useState("");
  //   let changes = (e) => {
  //     setpostChg(e.target.value);
  //   };

  let [status, setStatus] = useState("upcoming");
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
      status: status,
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
        <label htmlFor="">Status</label>
        <select
          name=""
          id=""
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
          <option value="dropped">Dropped</option>
        </select>
      </div>
      <div className="post-form">
        <button type="submit">Post Now</button>
      </div>
    </form>
  );
}
