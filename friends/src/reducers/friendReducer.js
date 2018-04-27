import {FETCHING,ERROR,SUCCESS} from '../actions/getFriends';
let initialState = {
    friends:[],
    fetching:false,
    error:null
}

export const friendReducer = (friends = initialState,action) => {
    switch(action.type){
        case FETCHING:
            return {...friends,fetching:true,friends:[]};
        case SUCCESS:
            return {...friends,friends:action.friends,fetching:false}
        case ERROR:
            return {...friends,error:action.error}
        default: 
            console.log(friends)
            return friends
    }
}

