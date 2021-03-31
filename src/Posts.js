// useEffect to cause side effects
import React, { useState, useEffect, Fragment } from 'react';
import getList from './services/get_list';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const postTableRows = posts.map((post) =>{
    return(
      <tr key={post.id}>
        <td>{post.title}</td>
        <td>{post.body}</td>
      </tr>
    )
  });

  useEffect(() => {
    let mounted = true;
    getList('posts').then(items => {
      if(mounted){
        setPosts(items);
      }
    })
    
    return () => mounted = false;
  }, []);

  return (
    <Fragment>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {postTableRows}
        </tbody>
      </table>
    </Fragment>
  )
}

export default Posts;
