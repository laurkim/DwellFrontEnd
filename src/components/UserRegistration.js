import React from 'react';
import { connect }  from 'react-redux';
import { registerUser } from '../Redux/actions/index.js';

const UserRegistration = (props) => {
  const registerUser = event => {
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
    props.registerUser(registrationInput, props.history);
  }

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={registerUser}>
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
    </div>
  )
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (registrationInput, history) => dispatch(registerUser(registrationInput, history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
