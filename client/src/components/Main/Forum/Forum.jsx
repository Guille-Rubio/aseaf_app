import React from "react";
import posts from './post.json';
import PostCard from "./PostCard/PostCard";

const Forum = () => {

  return (
    <div>
      {posts.map((post, i) => <PostCard key={i} post={post} />)}
    </div>
  );
};

export default Forum;
