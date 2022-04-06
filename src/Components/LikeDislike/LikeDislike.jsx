//Build out the “like” and “dislike” functionality. Within the “Post” component, create 2
//separate functions – one for when the “like” button is clicked, and one for when the “dislike”
//button is clicked. Bind these functions to their respective button’s onClick event. Within these
//functions, start to lay out the steps that need to occur when each button is clicked. (a data
//type that has two states (T/F))

import React, { useState, useEffect } from 'react';
import './LikeDislike.css';

const LikeDislike = (props) => {
  const [likeSelected, setLikeSelected] = useState(false);
  const [likeClass, setLikeClass] = useState('inactive');
  const [dislikeClass, setDislikeClass] = useState('inactive');

  function handleLike() {
    if (props.post.like === false){
      props.post.like = true;
      setLikeSelected(true);
      props.post.dislike = false;
    } else {
      props.post.like = false;
      setLikeSelected(false);
    }
  }

  function handleDislike() {
    if (props.post.dislike === false){
      props.post.dislike = true;
      // setLikeSelected(true);
      props.post.like = false;
    } else {
      props.post.dislike = false;
      // setLikeSelected(false);
    }
  }

  useEffect(() => {
    if (props.post.like === false){
      setLikeClass('inactive');
    } else {
      setLikeClass('active');
    }
  }, [likeSelected]);

  useEffect(() => {
    if (props.post.dislike === false){
      setDislikeClass('inactive');
    } else {
      setDislikeClass('active');
    }
  }, [props.post.dislike]);
  debugger;

  return (
    <div className="button-wrap">
      <div className='button-image'>
        <button className={likeClass} onClick={handleLike}>
          Like
        </button>
      </div>
      <div>
        <button className={dislikeClass} onClick={handleDislike}>
          Dislike
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;
