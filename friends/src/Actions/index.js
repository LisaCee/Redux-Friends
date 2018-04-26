import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';

export const fetchingFriends = () => ({ type: FETCHING_FRIENDS });
export const postingFriend = () => ({ type: POSTING_FRIEND });
export const postSuccess = () => ({ type: POST_SUCCESS })

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


export const postFriend = friend => dispatch => {
  dispatch(postingFriend());

  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response => {
      setTimeout(
	() => {
	  dispatch(postSuccess())
	  dispatch(fetchFriends())
	}, 1500
      )
    })
    .catch(e => console.log(e))
}


