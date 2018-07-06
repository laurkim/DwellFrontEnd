import React from 'react';
import { connect }  from 'react-redux';
import { loginUser } from '../Redux/actions/index.js';

const UserLogin = (props) => {
  const loginUser = event => {
    event.preventDefault();
    let username = event.target.username.value;
    let password = event.target.password.value;
    let loginInput = { username, password };
    event.target.reset();
    props.loginUser(loginInput, props.history);
  }

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={loginUser}>
        <label>Username: </label>
        <input type="text" name="username" placeholder="Username"/>
        <br/>
        <label>Password: </label>
        <input type="password" name="password" placeholder="Password"/>
        <br/>
        <button type="submit">Login User</button>
      </form>
    </div>
  );

}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (loginInput, history) => dispatch(loginUser(loginInput, history))
  }
}

export default connect(null, mapDispatchToProps)(UserLogin);
