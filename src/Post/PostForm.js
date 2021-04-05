import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { createPost } from '../actions/postActions';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';

const PostForm = ({createNewPost}) => {
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
    createNewPost({...post});
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

const mapDispatchToProps = (dispatch) => ({
  createNewPost: payload => dispatch(createPost(payload))
})

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  createNewPost: PropTypes.func
}

export default connect(null, mapDispatchToProps)(PostForm);
