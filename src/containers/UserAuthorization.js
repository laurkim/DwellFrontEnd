import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { registerUser, loginUser } from '../Redux/actions/index.js';

class UserAuthorization extends Component {

  render() {
    return (
      <div>
        <h1>HI HI HI HI HI HI</h1>
        <p>Inside User Auth Component</p>
      </div>
    )
  }
}

export default UserAuthorization;
