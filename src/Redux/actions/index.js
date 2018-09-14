import { Headers } from '../../adapters/Headers.js';
const registrationURL = "https://dwell-api.herokuapp.com/api/v1/register";
const loginURL = "https://dwell-api.herokuapp.com/api/v1/login";
const userURL = "https://dwell-api.herokuapp.com/api/v1/fetch_user";
const workspaceURL = "https://dwell-api.herokuapp.com/api/v1/workspaces";
const bookingsURL = "https://dwell-api.herokuapp.com/api/v1/bookings";
const favoritesURL = "https://dwell-api.herokuapp.com/api/v1/favorites";

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
      dispatch({ type: 'CREATE_USER', payload: json });
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
      dispatch({ type: 'LOGIN_USER', payload: json });
      history.push('/home');
    })
    .catch(error => {
      alert("Invalid Login Credentials")
      history.push('/')
    })
  }
};

// On page refresh, make a request to the Rails API to retrieve the current user
export function fetchUser(token) {
  return (dispatch) => {
    return fetch(userURL, {
      method: 'POST',
      headers: Headers(),
      body: JSON.stringify({ token })
    })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: 'FETCH_USER', payload: json })
    });
  };
};

// Fetch all existing workspaces from Rails API to render for the current user to choose from
export function fetchWorkspaces(dispatch) {
  return (dispatch) => {
    return fetch(workspaceURL, {
      headers: Headers()
    })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: "GET_WORKSPACES", payload: json })
    })
  }
};

// Retrive all of the current user's bookings
export function fetchBookings() {
  return (dispatch) => {
    return fetch(bookingsURL, {
      headers: Headers()
    })
    .then(res => res.json())
    .then(json => {
      dispatch({ type: "GET_BOOKINGS", payload: json })
    })
  }
}

// Create a new booking for a workspace for the current user
export function bookWorkspace(workspaceId, startTime, endTime, callback) {
  return (dispatch) => {
    return fetch(bookingsURL, {
      method: "POST",
      headers: Headers(),
      body: JSON.stringify({
        booking: {
          workspace_id: workspaceId,
          start_time: startTime,
          end_time: endTime
        }
      })
    })
    .then(res => res.json())
    .then(json => callback(json))
  }
}

// Add a workspace to the current user's favorites (does not create a workspace booking)
export function favoriteWorkspace(workspaceId) {
  return (dispatch) => {
    return fetch(favoritesURL, {
      method: "POST",
      headers: Headers(),
      body: JSON.stringify({
        favorite: {
          workspace_id: workspaceId
        }
      })
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }
}

// Remove a workspace from the current user's favorites (does not create a workspace booking)
export function unfavoriteWorkspace(favoriteId, workspaceId) {
  return (dispatch) => {
    return fetch(`${favoritesURL}/${favoriteId}`, {
      method: "DELETE",
      headers: Headers()
    })
  }
}
