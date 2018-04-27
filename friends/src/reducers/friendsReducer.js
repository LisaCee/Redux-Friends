//import actions
import {FETCHING, FETCHED, ERROR, SAVING_FRIEND, FRIEND_SAVED, DELETING_FRIEND, FRIEND_DELETED} from '../actions'

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
        case SAVING_FRIEND:
            return Object.assign({}, state, {savingFriends: true});
        case FRIEND_SAVED:    
            return Object.assign({}, state, {savingFriends: false, friendsSaved: true,
                friendsFetched: true, friends: action.friends});
        case DELETING_FRIEND:
                return Object.assign({}, state, {deletingFriend: true});
        case FRIEND_DELETED:    
            return Object.assign({}, state, {deletingFriend: false, friendDeleted: true,
                    friends: action.friends});
        case ERROR:
            return Object.assign({}, state, { fetchingFriends: false, error: action.error});
        default:
            return state;
   }    
}