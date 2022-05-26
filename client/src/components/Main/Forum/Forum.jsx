import React from "react";
import posts from './post.json';
import PostCard from "./PostCard/PostCard";
import { v4 as uuidv4 } from 'uuid';

const Forum = () => {

  return (
    <div>
      {posts.map(post => <PostCard key={uuidv4()} post={post} />)}
    </div>
  );
};

export default Forum;
