import axios from 'axios';

//export actions
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING })
        axios.get('http://localhost:5000/api/friends')
            .then( (response) => {
                console.log(response);
                dispatch({ type: FETCHED, friends: response.data.friends})
            })
            .catch(err => {
                dispatch({ type: ERROR})
            });
    }
}