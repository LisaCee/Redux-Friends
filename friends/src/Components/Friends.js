import React from 'react';

const Friends = props => {
  return(
    <div>
      {props.fetchingFriends ? <p>Fetching Friends...</p> : null }
      <ul>
        {props.friends.map(friend => {
          return (
            <li>
              {friend.name}: EMAIL: {friend.email}, ID: {friend.id}, AGE: {friend.age}
              <button onClick={() => props.deleteFriend(friend.id)} >Delete</button>
            </li>
          )
        })}           
      </ul>
    </div>
    )
}

export default Friends;