import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFriends, createFriend, deleteFriend} from './actions/index';
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
    this.setState({ [e.target.name]: e.target.value })
    console.log('UPDATE', this.state);
  }

  addFriend = (e) => {
    e.preventDefault();
    const newFriend = { name: this.state.name, 
      age: Number(this.state.age), email: this.state.email};
    this.props.createFriend(newFriend);
    this.setState({ name: '', age: '', email: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        {this.props.fetchingFriends ? (<h3>Getting Friends</h3>) 
        : (
          <ul>
            {this.props.friends.map((friend, index) => { 
                return <li key={ friend.id }>{ friend.name }  <button onClick={() => this.delete(index) }>X</button> </li>
            })}
          </ul>
        )}
        <form>
          <input type='text' name='name' placeholder='name' onChange={this.updateInput} value={this.state.name}/>
          <input type='number' name='age' placeholder='age' onChange={this.updateInput} value={this.state.age}/>
          <input type='email' name='email' placeholder='email' onChange={this.updateInput} value={this.state.email}/>
          <button onClick={this.addFriend}>New Friend</button>
        </form>
        {console.log("here",this.props.friends)}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    fetchingFriends: state.fetchingFriends,
    friendsFetched: state.friendsFetched,
    savingFriend: state.savingFriend,
    deleteFriend: state.deleteFriend,
    friends: state.friends,
  }
}

export default connect(mapStateToProps, { getFriends, createFriend, deleteFriend })(App);
