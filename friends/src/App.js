import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFriends} from './actions/index';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.props.fetchingFriends ? (<h3>Getting Friends</h3>) 
        : (
          <ul>
            {this.props.friends.map(friend => {
              return <li key={friend.name}>{friend.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    friends: state.friends,
  }
}

export default connect(mapStateToProps, {getFriends})(App);
