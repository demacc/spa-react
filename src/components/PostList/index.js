import React from "react";
import "./index.css";
import SinglePost from "../SinglePost";

export default function PostList({ posts }) {
  return (
    <div className="PostContainer">
      <ul className="plContainer">
        {posts.map((post) => (
          <SinglePost post={post} />
        ))}
      </ul>
    </div>
  );
}
