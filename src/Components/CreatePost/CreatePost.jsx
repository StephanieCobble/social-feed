//forms
//create a form with 2 input fields. There should be an input field for the 
    //user’s name, as well as the body of their post, and each should be bound to its own state variable. 
//Implement a “handleSubmit” method for your form, which should pass the entered values to a 
    //function on the App.jsx component. That function should create a new “post” object, add it 
    //to the existing array of posts, and update the App.js state variable with the new array. (arrow function)

import React, { useState } from 'react';

const CreatePost = (props) => {

const [name, setName] = useState('');
const [post, setPost] = useState('');

function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        name: name,
        post: post
    };
    props.addNewPost(newPost);
    setName('');
    setPost('');
}

    return ( 
        <form onSubmit={handleSubmit} >
            <div>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)}/>
            </div>
            <button type='submit'>Create</button>
        </form>
     );
}
 
export default CreatePost;

