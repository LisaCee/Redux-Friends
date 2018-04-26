import { 
  FETCHING_FRIENDS, 
  FETCH_SUCCESS, 
  FETCH_ERROR,
  POSTING_FRIEND, 
  POST_SUCCESS, 
  POST_ERROR,
  DELETING_FRIEND,
  DELETE_SUCCESS,
  DELETE_ERROR
} from '../Actions';
// state = { fetch, success, error, state }

const defaultState = {
  fetching: false,
  posting: false,
  deleting: false,
  error: null,
  friends: []
}

export const friendsReducer = (state = defaultState, action) => {
  switch(action.type){
  case FETCHING_FRIENDS:
    return Object.assign({}, state, { fetching: true } );
    
  case FETCH_SUCCESS:
    return Object.assign({}, state, {
      fetching: false, friends: action.payload
    });
    
  case FETCH_ERROR:
    return Object.assign({}, state, {
      error: action.payload, fetching: false
    });

  case POSTING_FRIEND:
    return Object.assign({}, state, { posting: true });

  case POST_SUCCESS:
    return Object.assign({}, state, { posting: false });

  case POST_ERROR:
    return Object.assign({}, state, {
      posting: false, error: action.payload
    });

  case DELETING_FRIEND:
     return Object.assign({}, state, { deleting: true });

  case DELETE_SUCCESS:
     return Object.assign({}, state, { deleting: false });

  case DELETE_ERROR:
    return Object.assign({}, state, { deleting: false })

  default:
    return state;
  }
}
