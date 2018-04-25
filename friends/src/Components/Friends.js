import React from 'react';

const Friends = props => {
    return(
        <div>
            <ul>
                {props.friends.map(friend => {
                    return(
                        <li>{friend.name}</li>
                    )
                })}           
            </ul>
        </div>
    )
}

export default Friends;