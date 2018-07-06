import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { registerUser } from '../Redux/actions/index.js';

class UserRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      password_confirmation: '',
      email: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
    this.props.registerUser(registrationInput, this.props.history);
  }

  render() {
    return (
      <div>
        <h2>User Registration</h2>
        <form onSubmit={this.registerUser}>
          <label>First Name: </label>
          <input type="text" value={this.state.first_name} name="first_name" placeholder="First Name" onChange={this.handleChange}/>
          <br/>
          <label>Last Name: </label>
          <input type="text" value={this.state.last_name} name="last_name" placeholder="Last Name" onChange={this.handleChange}/>
          <br/>
          <label>Username: </label>
          <input type="text" value={this.state.username} name="username" placeholder="Username" onChange={this.handleChange}/>
          <br/>
          <label>Password: </label>
          <input type="password" value={this.state.password} name="password" placeholder="Password" onChange={this.handleChange}/>
          <br/>
          <label>Password Confirmation: </label>
          <input type="password" value={this.state.password_confirmation} name="password_confirmation" placeholder="Password Confirmation" onChange={this.handleChange}/>
          <br/>
          <label>Email: </label>
          <input type="text" value={this.state.email} name="email" placeholder="Email" onChange={this.handleChange}/>
          <br/>
          <button type="submit">Create User</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (registrationInput, history) => dispatch(registerUser(registrationInput, history))
  }
}

export default connect(null, mapDispatchToProps)(UserRegistration);
