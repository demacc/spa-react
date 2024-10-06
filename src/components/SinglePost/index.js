import React from "react";

export default function SinglePost({ post }) {
  return (
    <div>
      <li key={post.id}>
        <h2>{post.title}</h2>
        <h4>{post.status}</h4>
      </li>
    </div>
  );
}
