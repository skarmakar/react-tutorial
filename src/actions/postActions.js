import { FETCH_POSTS } from './types';
import { getItems } from '../services/get_list';


// export function fetchPosts(){
//   return function(dispatch){
//     getItems('posts')
//       .then(posts => dispatch({
//         type: FETCH_POSTS,
//         paylod: posts
//       }));
//   }
// }

export const fetchPosts = () => dispatch => {
  getItems('posts')
    .then(posts => 
      dispatch({
        type: FETCH_POSTS,
        paylod: posts
      })
    );
}
