import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDED = 'ADDED';
export const DELETED = 'DELETED';

export const getFriends = () => {
  return dispatch => {
    dispatch({type: FETCHING})
      axios.get('http://localhost:5000/api/friends')
        .then(response => {
          dispatch({type: FETCHED, friends: response.data})
        })
        .catch(error => {
          dispatch({type: ERROR, error: error})
        })
    }
}

export const addFriend = (newFriend) => {
  return dispatch => {
    // dispatchEvent({type: ADDED})
      axios.post('http://localhost:5000/api/friends', newFriend)
      .then(response => {
        dispatch({type: ADDED, friends: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}

export const deleteFriend = (id) => {
  return dispatch => {
      axios.delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        dispatch({type: DELETED, friends: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}