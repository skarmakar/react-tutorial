import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postItem } from '../services/get_list';

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
    postItem('posts', {...post})
      .then((data) => {
        console.log(data);
      })
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Submit</button>
    </form>
  )
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default PostForm;
