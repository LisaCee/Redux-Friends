import {FETCHING,ERROR,SUCCESS} from '../actions/getFriends';

export const friendReducer = (friends = [],action) => {
    switch(action.type){
        case FETCHING:
            return {...friends,fetching:true};
        case SUCCESS:
            return {...friends,friends:action.friends,fetching:false}
        case ERROR:
            return {...friends,error:action.error}
        default: return friends
    }
}

