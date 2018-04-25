import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchingFriends = () => ({
    type: FETCHING_FRIENDS,
})

export const fetchError = error => ({
    type: FETCH_ERROR,
    payload: error,
})

export const fetchSuccess = (friends) => ({
    type: FETCH_SUCCESS,
    payload: friends,
})

export const fetchFriends = () => {
    return dispatch => {
        dispatch(fetchingFriends())

        axios
        .get('http://localhost:5000/api/friends')
        .then(({ data })=> {
            dispatch(fetchSuccess(data))
        })
        .catch(error => {
            dispatch(fetchError(error))
        })
    }
}

