//parent file

import React, { useState } from 'react';
import NavBar from './Components/NavBar/NavBar';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import './App.css';

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
    <div className='all-container'>
      <NavBar />
      <div className='content-container'>
        <CreatePost addNewPostProp={addNewPost} />
        <div className="location-container">
          <DisplayPosts parentPost={posts} />
        </div>
      </div>
    </div>
  );
}

export default App;
