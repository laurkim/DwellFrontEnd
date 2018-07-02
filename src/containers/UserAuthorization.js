import React, { Component } from 'react';

class UserAuthorization extends Component {

  createUser = event => {
    event.preventDefault();
    let first_name = event.target.first_name.value
    let last_name = event.target.last_name.value
    let username = event.target.username.value
    let password = event.target.password.value
    let password_confirmation = event.target.password_confirmation.value
    let email = event.target.email.value
    fetch("http://localhost:3000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
          first_name,
          last_name,
          username,
          password,
          password_confirmation,
          email
      })
    })
      .then(res => res.json())
      .then(json => {debugger})
  }

  render() {
    return (
      <div>
        <p>user auth component</p>
        <form onSubmit={this.createUser}>
          <label>First Name: </label>
          <input type="text" name="first_name" placeholder="First Name"/>
          <label>Last Name: </label>
          <input type="text" name="last_name" placeholder="Last Name"/>
          <label>Username: </label>
          <input type="text" name="username" placeholder="Username"/>
          <label>Password: </label>
          <input type="password" name="password" placeholder="Password"/>
          <label>Password Confirmation: </label>
          <input type="password" name="password_confirmation" placeholder="Password Confirmation"/>
          <label>Email: </label>
          <input type="text" name="email" placeholder="Email"/>
          <button type="submit">Create User</button>
        </form>
      </div>
    )
  }
}

export default UserAuthorization;
