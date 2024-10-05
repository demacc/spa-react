import React, { useState } from "react";
import "./index.css";

export default function PostFrom() {
  let [postChg, setpostChg] = useState("");
  //   let changes = (e) => {
  //     setpostChg(e.target.value);
  //   };
  return (
    <form className="form-container">
      <div className="post-form">
        <label htmlFor="">Title</label>
        <input type="text" onChange={(e) => setpostChg(e.target.value)} />
      </div>
      <p>{postChg}</p>
      <div className="post-form">
        <button>Post Now</button>
      </div>
    </form>
  );
}
