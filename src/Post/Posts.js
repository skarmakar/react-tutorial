// useEffect to cause side effects
import React, { useEffect, Fragment } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

// connects components to redux stores
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

import { NavLink } from 'react-router-dom';

function Posts() {
  const selectPosts = (state) => {
    console.log('I am in select posts');
    console.log(state);
    return state.posts.items;
  };

  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const postItems = posts.map((post) =>{
    return <Post post={post} key={post.id}/>
  });

  // check the doc of useEffect
  // this will be called single time
  useEffect(() => {
    console.log('I am in dispatcher, from useeffect');
    dispatch(fetchPosts());
  }, []);

  return (
    <Fragment>
      <h1>
        Posts
        <small><NavLink to={'/posts/new'} className="nav-link btn btn-primary" exact>New Post</NavLink></small>
      </h1>
      <hr/>
      {postItems}
    </Fragment>
  )
}

Posts.propTypes = {
  posts: PropTypes.array
}

export default Posts;
