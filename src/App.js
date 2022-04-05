//parent file

import React, { useState } from "react";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Stephanie Cobble",
      post: "Its almost Easter!",
      like: false,
      dislike: false,
    },
    {
      name: "Abaddon13",
      post: "Anyone playing elden ring?",
      like: false,
      dislike: false,
    },
  ]);

  function addNewPost(post) {
    let tempPosts = [post, ...posts];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
      <div>
        <CreatePost addNewPostProp={addNewPost} />
        <div>
          <DisplayPosts parentPost={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
