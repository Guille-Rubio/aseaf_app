import React from "react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from 'react-icons/fa';

const PostCard = (props) => {
  const { title, image, author, message, response } = props.post;
  return (
    <div>
      {title}
      <div>
        <div>
          <img src={image} alt={author} />
          {author}
        </div>
        <div>
          {message}
        </div>
        <div>
          <FaRegBookmark /><FaRegHeart /><FaRegComment />
        </div>
        {response.length > 0
          ? response.map(resp => {
            return (
              <div>
                <div>
                  <img src={resp.image} alt={author} />
                  {resp.author}
                </div>
                <div>
                  {resp.message}
                </div>
              </div>
            )
          })
          : ''}
      </div>
    </div>
  );
};

export default PostCard;
