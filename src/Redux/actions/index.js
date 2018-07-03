import { Headers } from '../../adapters/Headers.js';

// Based on User Input from the Registration Form, make a request to the Rails API to create a new user
export function registerUser(registrationInput, history) {
  const { first_name, last_name, username, password, password_confirmation, email } = registrationInput
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/register", {
      method: "POST",
      headers: Headers(),
      body: JSON.stringify({
        user: {
          first_name, last_name, username, password, password_confirmation, email
        }
      })
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem("token", json.token);
      dispatch({ type: 'CREATE_USER', payload: json.username });
      console.log("acccount created!!!!");
      console.log("redirecting");
      console.log("------");
      history.push('/login');
    })
  }
};

// Based on User Input from the Login Form, make a request to the Rails API to login a user
export function loginUser(loginInput, history) {
  const { username, password } = loginInput
  return (dispatch) => {
    return fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: Headers(),
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem("token", json.token);
      dispatch({ type: 'LOGIN_USER', payload: json.username });
      console.log("user logged in!!!!");
      debugger
      history.push('/');
    })
  }
};
