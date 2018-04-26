import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFriends, createFriend} from './actions/index';
import './App.css';

class App extends Component {
  state = {
    id: '',
    name: '',
    age: '',
    email: '',
  };

  componentDidMount(){
    this.props.getFriends();
  }

  updateInput = e => {
    this.setState({ name: e.target.value })
    console.log('UPDATE', this.state);
  }

  addFriend = () => {
    const newFriend = { name: this.state.name};
    this.props.createFriend(newFriend);
    this.setState({ name: '' });
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
        <input placeholder='Add Friend' type='text' name='friend' onChange={this.updateInput} />
        <button onClick={this.addFriend}>New Friend</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    savingFriend: state.savingFrien,
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { getFriends, createFriend })(App);
