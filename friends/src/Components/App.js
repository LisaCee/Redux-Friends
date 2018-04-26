import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { fetchFriends, postFriend } from '../Actions';

class App extends Component {
  state = { name: '', age: '', email: '' }

  handleInputChange = e => {
    // come back and make this take a callback instead of obj
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    const { name, age, email } = this.state
    e.preventDefault();
    this.props.postFriend({ name, age, email });
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
	<button onClick={this.handleSubmit}>Add friend</button>
        {this.props.friends.map((friend, index) => {
          return (
            <div key={index}>
              <h3>Friends name: {friend.name}</h3>
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
  error: state.friends.error,
})

export default connect(mapStateToProps, { fetchFriends, postFriend })(App);
