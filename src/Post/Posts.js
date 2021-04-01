// useEffect to cause side effects
import React, { useEffect, Fragment } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import PropTypes from 'prop-types';

// connects components to redux stores
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const Posts = (props) => {
  const postItems = props.posts.map((post) =>{
    return <Post post={post} key={post.id}/>
  });

  useEffect(() => {
    console.log('fetch posts');
    fetchPosts();
  });

  return (
    <Fragment>
      <PostForm />
      <br/>
      <h1>Posts</h1>
      {postItems}
    </Fragment>
  )
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

Posts.propTypes = {
  posts: PropTypes.object
}

export default connect(mapStateToProps, { fetchPosts })(Posts);
