//create a template of how you would like each individual post to be
    //displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons.
//Build out the “like” and “dislike” functionality. Within the “Post” component, create 2
    //separate functions – one for when the “like” button is clicked, and one for when the “dislike”
    //button is clicked. Bind these functions to their respective button’s onClick event. Within these
    //functions, start to lay out the steps that need to occur when each button is clicked. (a data
    //type that has two states (T/F))


import React from "react";
import LikeDislike from '../LikeDislike/LikeDislike';

const Post = (props) => {
  return (
    <div>
      <div>
        <h3>{props.post.name}</h3>
        <p>{props.post.post}</p>
        <LikeDislike post={props.post}/>
      </div>
    </div>
  );
};

export default Post;
