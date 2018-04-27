import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import {
  fetchFriends,
  postFriend,
  deleteFriend,
  updateFriend,
} from '../Actions';

class App extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    id: '',
    editing: false
  }

  handleInputChange = e => {
    // come back and make this take a callback instead of obj
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    const { name, age, email } = this.state
    e.preventDefault();
    this.props.postFriend({ name, age, email });
    this.setState({ name: '', age: '', email: '' })
  }

  handleDelete = id => {
    this.props.deleteFriend(id);
  }

  editFriend = ({ name, age, email, id }) => {
    this.setState(
      () => ({ name, age, email, id, editing: true }))
  }

  handleEdit = () => {
    const { name, age, email, id } = this.state
    console.log('editing friend')
    console.log({ name, age, email })

    this.props.updateFriend({ name, age, email, id })
    this.setState({ name: '', age: '', email: '', id: '', editing: false })
  }

  componentDidMount() {
    this.props.fetchFriends()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          WANT TO SEE MY FRIENDS!?
        </p>
	<input
	  onChange={this.handleInputChange}
	  value={this.state.name}
	  type="text"
	  name="name"
	  placeholder="friend name"
	  />
	<input
	  onChange={this.handleInputChange}
	  value={this.state.age}
	  type="text"
	  name="age"
	  placeholder="age"
	  />
	<input
	  onChange={this.handleInputChange}
	  value={this.state.email}
	  type="text"
	  name="email"
	  placeholder="email"
	  />
	{
	    this.state.editing
	      ? <button onClick={this.handleEdit}>Edit Friend</button>
	      : <button onClick={this.handleSubmit}>Add friend</button>
	}
        {this.props.friends.map(friend => {
          return (
            <div key={friend.id}>
              <h3>Friends name: {friend.name}</h3>
              <button onClick={() => this.handleDelete(friend.id)}>Delete Friend Here!</button>
              <button onClick={() => this.editFriend(friend)}>Edit Friend Here!</button>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps =  state => ({
  friends: state.friends.friends,
  fetching: state.friends.fetching,
  posting: state.friends.posting,
  deleting: state.friends.deleting,
  updating: state.friends.updating,
  error: state.friends.error,
})

const mapDispatchToProps = {
  fetchFriends,
  postFriend,
  deleteFriend,
  updateFriend
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
