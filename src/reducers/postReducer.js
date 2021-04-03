// evaluate any actions those are committed
import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_POSTS:
      console.log('call FETCH_POSTS reducer');
      return {
        ...state,
        items: action.payload
      }
    case NEW_POST:
      console.log('call NEW_POST reducer');
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
