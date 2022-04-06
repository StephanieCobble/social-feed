//create a template of how you would like each individual post to be
//displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.

import React, {useState, useEffect} from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';



const Post = (props) => {
  return (
    <div className="post">
      <h4>{props.post.name}</h4>
      <p>{props.post.post}</p>
      <div className="bottom-content">
        <LikeDislike post={props.post} />
      </div>
    </div>
  );
};

export default Post;
