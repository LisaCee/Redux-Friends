import { GET_FRIENDS, GET_A_FRIEND, ADD_FRIEND, UPDATE_FRIEND, DELETE_FRIEND, ERROR } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friend: [],
    friends: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(GET_FRIENDS):
            return Object.assign({}, state, { friends: action.payload, friendsFetched: true,
                                              error: null });
        case(ERROR):
            return Object.assign({}, state, { error: action.error });

        case(GET_A_FRIEND):
                return Object.assign({}, state, { friend: action.payload, friendFetched: true,
                                                  error: null });
                                                  
        default:
            return state
    }
}