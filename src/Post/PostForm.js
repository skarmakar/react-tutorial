import React, { useState } from 'react';
import PropTypes from 'prop-types';
import store from '../store';

import { createPost } from '../actions/postActions';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PostForm = () => {
  const defaultPost = {
    title: '', 
    body: ''
  };

  const [post, changePost] = useState(defaultPost);

  const handleChange = (event) => {
    let currentPost = {...post};
    currentPost[event.target.name] = event.target.value;
    changePost(currentPost);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    store.dispatch(createPost({...post}));
  };

  return (
    <Form onSubmit={handleSubmit} className="form">
      <label htmlFor="title">Title</label>
      <br/>

      <input 
        type="text"
        name="title"
        id="title"
        value={post.title}
        onChange={handleChange} />
      <br/>
      <label htmlFor="body">Body</label>
      <br/>
      <textarea 
        name="body"
        id="body"
        value={post.body}
        onChange={handleChange} />
      
      <br/>
      <Button type="submit">Submit</Button>
    </Form>
  )
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default PostForm;
