//Build out the “like” and “dislike” functionality. Within the “Post” component, create 2
//separate functions – one for when the “like” button is clicked, and one for when the “dislike”
//button is clicked. Bind these functions to their respective button’s onClick event. Within these
//functions, start to lay out the steps that need to occur when each button is clicked. (a data
//type that has two states (T/F))

import React, { useState, useEffect } from "react";
import "./LikeDislike.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const LikeDislike = (props) => {
  const [likeSelected, setLikeSelected] = useState(false);
  const [dislikeSelected, setDislikeSelected] = useState(false);
  const [likeClass, setLikeClass] = useState("like-inactive");
  const [dislikeClass, setDislikeClass] = useState("dislike-inactive");

  const handleLike = () => {
    if (likeSelected) {
      setLikeSelected(false);
    } else {
      setLikeSelected(true);
      setDislikeSelected(false);
    }
  };

  const handleDislike = () => {
    if (dislikeSelected) {
      setDislikeSelected(false);
    } else {
      setDislikeSelected(true);
      setLikeSelected(false);
    }
  };

  useEffect(() => {
    if (likeSelected === true) {
      setLikeClass("like-active");
    } else if (likeSelected === false) {
      setLikeClass("like-inactive");
    }
  }, [likeSelected]);

  useEffect(() => {
    if (dislikeSelected === true) {
      setDislikeClass("dislike-active");
    } else if (dislikeSelected === false) {
      setDislikeClass("dislike-inactive");
    }
  }, [dislikeSelected]);

  // const ThumbsUp = () => (
  //   <div>
  //     <FontAwesomeIcon icon='fa-solid fa-thumbs-up' style='color:#0fd236' />
  //   </div>
  // )

  library.add(faThumbsUp, faThumbsDown);

  return (
    <div className="rating">
      <div>
        <button className={likeClass} onClick={handleLike}>
          <FontAwesomeIcon
            color="#525753"
            icon={["fa-solid", "fa-thumbs-up"]}
          />
        </button>
      </div>

      <div>
        <button className={dislikeClass} onClick={handleDislike}>
          <FontAwesomeIcon
            color="#525753"
            icon={["fa-solid", "fa-thumbs-down"]}
          />
        </button>
      </div>
    </div>
  );
};

export default LikeDislike;
