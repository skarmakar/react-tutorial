import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Post = (props) => {
  //console.log(props);

  return (
    <Fragment>
      <h3>{props.post.title}</h3>
      <p>{props.post.body}</p>
    </Fragment>
  );
}

Post.propTypes = {
  post: PropTypes.object
}

// this will forward the router props to each post
// uncomment console.log to check that in action
export default withRouter(Post);
