import React from "react";

export default function SinglePost({ post }) {
  return (
    <div>
      <li key={post.id}>{post.title}</li>
    </div>
  );
}
