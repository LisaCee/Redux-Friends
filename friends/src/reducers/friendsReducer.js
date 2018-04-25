//import actions
import {FETCHING, FETCHED, ERROR} from '../actions'

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
}

export const friendsReducer = (state = initialState, action) => {
   switch (action.type) {
        case FETCHING:
            return Object.assign({}, state, { fetchingFriends: true});
        case FETCHED:
            return Object.assign({}, state, { friendsFetched: true, fetchingFriends: false, 
            friends: state.friends.concat(action.friends)});
        case ERROR:
            return Object.assign({}, state, { fetchingFriends: false, error: action.error})
        default:
            return state;
   }    
}