import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap';
import "../App.css";

const Friends = props => {
  return(
    <div>
      {props.fetchingFriends ? <p>Fetching Friends...</p> : null }
      <div className='friends'>
        {props.friends.map(friend => {
          return (
            <div className='friendCard'>
              
                  <Card>
                    <CardBody>
                      <CardTitle>{friend.id}. {friend.name}</CardTitle>
                      <CardSubtitle>{friend.age}</CardSubtitle>
                      <CardText>{friend.email}</CardText>
                      <Button onClick={() => props.deleteFriend(friend.id)} >Delete Friend</Button>
                    </CardBody>
                  </Card>
                
            </div>
          )
        })}           
      </div>
    </div>
    )
}

export default Friends;