//parent file

import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/Post/Post'
import './App.css'
import NavBar from './Components/NavBar/NavBar';


function App() {
const [posts, setPosts] = useState([ 
  {name: 'Stephanie Cobble', post: 'Its almost Easter!'},
  {name: 'Abaddon13', post: 'Anyone playing elden ring?'},
]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }

  return (
    <div className='all-container'>
      <CreatePost addNewPostProp={addNewPost}/>
      <DisplayPosts parentPost={posts}/>
      <Post />
      <NavBar />
    </div>
  );
}

export default App;


