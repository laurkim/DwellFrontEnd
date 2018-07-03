import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { registerUser, loginUser } from '../Redux/actions/index.js';

class UserAuthorization extends Component {

  registerUser = event => {
    event.preventDefault();
    let first_name = event.target.first_name.value
    let last_name = event.target.last_name.value
    let username = event.target.username.value
    let password = event.target.password.value
    let password_confirmation = event.target.password_confirmation.value
    let email = event.target.email.value
    let registrationInput = {
      first_name,
      last_name,
      username,
      password,
      password_confirmation,
      email
    };
    event.target.reset();
    this.props.registerUser(registrationInput);
  }

  loginUser = event => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    let loginInput = { username, password };
    event.target.reset();
    this.props.loginUser(loginInput)
  }

  render() {
    return (
      <div>
        <p>user auth component</p>
        <h2>User Registration</h2>
        <form onSubmit={this.registerUser}>
          <label>First Name: </label>
          <input type="text" name="first_name" placeholder="First Name"/>
          <br/>
          <label>Last Name: </label>
          <input type="text" name="last_name" placeholder="Last Name"/>
          <br/>
          <label>Username: </label>
          <input type="text" name="username" placeholder="Username"/>
          <br/>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Password"/>
          <br/>
          <label>Password Confirmation: </label>
          <input type="password" name="password_confirmation" placeholder="Password Confirmation"/>
          <br/>
          <label>Email: </label>
          <input type="text" name="email" placeholder="Email"/>
          <br/>
          <button type="submit">Create User</button>
        </form>

        <h2>User Login</h2>
        <form onSubmit={this.loginUser}>
          <label>Username: </label>
          <input type="text" name="username" placeholder="Username"/>
          <br/>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Password"/>
          <br/>
          <button type="submit">Login User</button>
        </form>
{/*        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={UserAuthorization} />
        <Route exact path="/about" component={About} /> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    registerUser: registrationInput => dispatch(registerUser(registrationInput)),
    loginUser: loginInput => dispatch(loginUser(loginInput))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorization);
