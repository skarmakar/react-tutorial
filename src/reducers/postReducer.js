// evaluate any actions those are committed

import { FETCH_POSTS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

const postReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS:
      console.log('reducer');
      return {
        ...state,
        items: action.payload
      }
    default:
      state;
  }
};

export { postReducer };
