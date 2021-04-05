import { FETCH_POSTS, NEW_POST } from './types';

// es7 syntax
export function fetchPosts() {
  console.log('I am in action');
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => dispatch({ 
        type: FETCH_POSTS, 
        payload: posts 
      }));
  }
}

export function createPost(postData) {
  console.log('action called');
  return(dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(post => dispatch({ 
        type: NEW_POST, 
        payload: post 
      }));
  }
}
