import React from 'react';

const Friends = props => {
  return(
    <div>
      {props.fetchingFriends ? <p>Fetching Friends...</p> : null }
      <ul>
        {props.friends.map(friend => {
          return (
            <li>{friend.name}</li>
          )
        })}           
      </ul>
    </div>
    )
}

export default Friends;