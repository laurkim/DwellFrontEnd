import React, { Component } from 'react';

class UserAuthorization extends Component {

  registerUser = event => {
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
        user: {
          first_name,
          last_name,
          username,
          password,
          password_confirmation,
          email
        }
      })
    })
      .then(res => res.json())
      .then(json => {
        debugger;
        localStorage.setItem("token", json.token);
        console.log("user has been created and local storage set");
        console.log("token is", localStorage.getItem("token"));
        console.log("------");
      })
  }

  loginUser = event => {
    event.preventDefault();
    let username = event.target.username.value
    let password = event.target.password.value
    event.target.reset()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(json => {
        debugger;
        localStorage.setItem("token", json.token);
        console.log("user has been authorized and local storage set");
        console.log("token is", localStorage.getItem("token"));
        console.log("------");
      })
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
      </div>
    )
  }
}

export default UserAuthorization;
