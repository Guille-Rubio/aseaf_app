import React from "react";
import { FaRegHeart, FaRegComment, FaRegBookmark } from 'react-icons/fa';
import diana from '../../../../assets/img/diana.png';
import jaime from '../../../../assets/img/jaime.png';
import laura from '../../../../assets/img/laura.png';
import maria from '../../../../assets/img/maria.png';
import pedro from '../../../../assets/img/pedro.png';

const PostCard = (props) => {
  const avatars = [diana, jaime, laura, maria, pedro];
  const names = ['diana', 'jaime', 'laura', 'maria', 'pedro']

  const { title, image, author, message, response } = props.post;
  return (

    <div className="postcard__container">
      <p className="postcard__title">{title}</p>
      <div className="postcard">
        <div className="postcard__header">
          {names.map((name, i) => {
            if (name === image)
              return <img className="postcard__avatar" src={avatars[i]} alt={author} />
            else
              return ''
          })}
          {author}
        </div>
        <div className="postcard__message">
          {message}
        </div>
        <div className="postcard__icons">
          <FaRegBookmark /><FaRegHeart /><FaRegComment />
          <button className="postcard__icons--button">Responder</button>
        </div>
      </div>
      <div>
        {response.length > 0
          ? response.map(resp => {
            return (
              <div className="postcard__response">
                <div className="postcard__header">
                  {names.map((name, i) => {
                    if (name === resp.image)
                      return <img className="postcard__avatar" src={avatars[i]} alt={author} />
                    else
                      return ''
                  })}
                  {resp.author}
                </div>
                <div className="postcard__message">
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
