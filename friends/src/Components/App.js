import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { fetchFriends } from '../Actions';

class App extends Component {
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

export default connect(mapStateToProps, { fetchFriends })(App);
