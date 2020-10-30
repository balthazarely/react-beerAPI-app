import React from "react";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts &&
        posts.map((brew) => {
          return <li>{brew.name}</li>;
        })}
    </div>
  );
}
