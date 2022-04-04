//parent file

import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import DisplayPosts from './Components/DisplayPosts';
import Posts from './Components/Posts';


function App() {
const [posts, setPosts] = useState([ 
  {name: 'Stephanie Cobble', post: 'It/s almost Easter!'}
]);

  function addNewPost(post) {
    let tempPosts = [...posts, post];
    setPosts(tempPosts);
  }
  return (
    <div>
      <CreatePost addNewPostProp={addNewPost}/>
      <DisplayPosts parentPost={posts}/>
    </div>
  );
}

export default App;
