import { Headers } from '../../adapters/Headers.js';
const registrationURL = "http://localhost:3000/api/v1/register";
const loginURL = "http://localhost:3000/api/v1/login";
const workspaceURL = "http://localhost:3000/api/v1/workspaces";
const bookingsURL = "http://localhost:3000/api/v1/bookings";


// Based on User Input from the Registration Form, make a request to the Rails API to create a new user
export function registerUser(registrationInput, history) {
  const { first_name, last_name, username, password, password_confirmation, email } = registrationInput;
  return (dispatch) => {
    return fetch(registrationURL, {
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
      dispatch({ type: 'CREATE_USER', payload: json.user.username });
      history.push('/login');
    })
  }
};

// Based on User Input from the Login Form, make a request to the Rails API to login a user
export function loginUser(loginInput, history) {
  const { username, password } = loginInput;
  return (dispatch) => {
    return fetch(loginURL, {
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
      dispatch({ type: 'LOGIN_USER', payload: json.user.username });
      history.push('/home');
    })
    .catch(error => {
      alert("Invalid Login Credentials")
      history.push('/')
    })
  }
};

// Fetch all existing workspaces from Rails API to render for a user to choose from
export function fetchWorkspaces(dispatch) {
  return (dispatch) => {
    return fetch(workspaceURL, {
      headers: Headers()
    })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: "GET_WORKSPACES", payload: json})
    })
  }
};

// Create a new booking for a workspace for a specific user
export function bookWorkspace(workspaceId, startTime, endTime) {
  return (dispatch) => {
    return fetch(bookingsURL, {
      method: "POST",
      headers: Headers(),
      body: JSON.stringify({
        workspaceId,
        startTime,
        endTime
      })
    })
    .then(res => res.json())
    .then(json => {
      if (json.message === undefined) {
        alert("You've booked this workspace!");
      } else {
        alert(json.message)
      }
    })
  }
}
