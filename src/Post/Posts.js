// useEffect to cause side effects
import React, { useEffect, Fragment } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

// connects components to redux stores
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import store from '../store';

import {NavLink} from 'react-router-dom';

const Posts = (props) => {
  const postItems = props.posts.map((post) =>{
    return <Post post={post} key={post.id}/>
  });

  // check the doc of useEffect
  // this will be called single time
  useEffect(() => {
    console.log('fetch posts');
    store.dispatch(fetchPosts());
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

const mapStateToProps = state => ({
  posts: state.posts.items
});


Posts.propTypes = {
  posts: PropTypes.array
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
