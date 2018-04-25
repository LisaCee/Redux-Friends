import { FETCHING_FRIENDS, FETCH_SUCCESS, FETCH_ERROR} from '../Actions';
// state = { fetch, success, error, state }

const defaultState = {
    fetching: false,
    error: null,
    friends: []
}

export const friendsReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCHING_FRIENDS:
            return Object.assign({}, state, { fetching: true } );

        case FETCH_SUCCESS:
            return Object.assign({}, state, { fetching: false, friends: state.friends.concat(action.payload) });
            
        case FETCH_ERROR:
            return Object.assign({}, state, { error: action.payload, fetching: false });

        default:
            return state;
    }
}