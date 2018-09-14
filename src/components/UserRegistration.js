import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { registerUser } from '../Redux/actions/index.js';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class UserRegistration extends Component {
  constructor() {
    super();

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
      <div className="user-form">
        <Typography className="form-title" variant="display2" gutterBottom>
          Register for DWELL
        </Typography>
        <form onSubmit={this.registerUser} className="form-break">
          <TextField
            className="form-input"
            autoComplete="off"
            name="first_name"
            label="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="form-input"
            autoComplete="off"
            name="last_name"
            label="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="form-input"
            autoComplete="off"
            name="username"
            label="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="form-input"
            autoComplete="off"
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="form-input"
            autoComplete="off"
            type="password"
            name="password_confirmation"
            label="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            className="form-input"
            autoComplete="off"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br/>
          <Button className="submit-button" variant="contained" type="submit">
            Create Account
          </Button>
        </form>
        <p>Already have an account? Click <Link to="/login">here</Link> to login.</p>
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
