import axios from 'axios';

//export actions
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const SAVING_FRIEND = 'SAVING_FRIEND';
export const FRIEND_SAVED = 'FRIEND_SAVED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING })
        axios.get('http://localhost:5000/api/friends')
            .then( (response) => {
                console.log(response);
                dispatch({ type: FETCHED, friends: response.data })
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

export const deleteFriend = (id) => {
    return dispatch => {
        dispatch({ type: DELETING_FRIEND });
        axios
            .delete(`http://localhost:5000/api/friends/${id}`)
            //**continue here**//
            .then( response => {
                console.log('ress',response)
                dispatch({ type: FRIEND_DELETED, friends: response.data})
                
            })
            .catch( () => {
                dispatch({ type: ERROR, error: 'ERROR DELETING FRIEND'})
            })
    }
}