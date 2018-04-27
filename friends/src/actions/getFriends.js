import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type:FETCHING})
        axios.get('http://localhost:5000/api/friends')
        .then((response) => {
            console.log(response.data)
            dispatch({type:SUCCESS,friends:response.data})
        })
        .catch( err => {
            dispatch({type:ERROR,error:err});
        })
        
    }
}

export const addFriend = (friend) => {
    return (dispatch) => {
        dispatch({})
    }
}