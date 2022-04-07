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
      post: post,
    };
    props.addNewPost(newPost);
    setName('');
    setPost('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              className="name-control"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Post</label>
          <div className="col-sm-10">
            <textarea
              className="post-control"
              type='text'
              value={post}
              onChange={(event) => setPost(event.target.value)}
            />
          </div>
        </div>
        <div >
          <button color='white' className='create' type="submit">
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
