//to display list item (li)
//create the feed where all your posts will be displayed in your app. 
//All posts should be passed into this component using props. Then, utilize the “map” 
//higher order array method to map each post to its own Post component.

import React from 'react';
import Post from '../Post/Post';

const DisplayPosts = (props) => {
    return ( 
        props.posts.map((post) => 
          <div>
          <Post post={post}/>
          </div>
        )
    );
} 
export default DisplayPosts;