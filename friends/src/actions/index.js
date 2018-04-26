import axios from 'axios';

//export actions
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED'

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING })
        axios.get('http://localhost:5000/api/friends')
            .then( (response) => {
                console.log(response);
<<<<<<< HEAD
                dispatch({ type: FETCHED, friends: response.data})
=======
                dispatch({ type: FETCHED, friends: response.data })
>>>>>>> 12a0fd18f0f0c7eae249427829c9db3278ca5aa5
            })
            .catch(err => {
                dispatch({ type: ERROR, error: 'ERROR GETTING FRIENDS'})
            });
    }
}

export const createFriend = (friend) => {
    return dispatch => {
        dispatch({ type: SAVING_FRIEND });
        axios
            .post('http://localhost:5000/api/friends', friend)
            .then( response => {
                dispatch({ type: FRIEND_SAVED, friends: response.data})
            })
            .catch( () => {
                dispatch({ type: ERROR, error: 'ERROR ADDING FRIEND'})
            })
    }
}