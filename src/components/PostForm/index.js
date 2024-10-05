import React, { useState } from "react";
import "./index.css";

export default function PostFrom() {
  let [postChg, setpostChg] = useState("");
  //   let changes = (e) => {
  //     setpostChg(e.target.value);
  //   };

  let restPost = () => {
    setpostChg("");
    console.log("hit");
  };
  return (
    <form className="form-container">
      <div className="post-form">
        <label htmlFor="">Title</label>
        <input
          type="text"
          onChange={(e) => setpostChg(e.target.value)}
          value={postChg}
        />
      </div>
      <p>{postChg}</p>
      <div className="post-form">
        <button type="button" onClick={restPost}>
          rest form
        </button>
        <button>Post Now</button>
      </div>
    </form>
  );
}
