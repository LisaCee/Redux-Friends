import axios from 'axios';

//export actions

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING })
        axios.get('http://localhost:5000/api/friends')
    }
}