import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { registerUser } from '../Redux/actions/index.js';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
      <div className="user-forms">
        <Typography variant="display2" gutterBottom style={{ fontFamily: 'Raleway', paddingTop: '10%'}}>
          Register for DWELL
        </Typography>
        <form autoComplete="off" onSubmit={this.registerUser} >
          <TextField
            name="first_name"
            label="First Name"
            value={this.state.first_name}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <TextField
            name="last_name"
            label="Last Name"
            value={this.state.last_name}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <TextField
            name="username"
            label="Username"
            value={this.state.username}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <TextField
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <TextField
            type="password"
            name="password_confirmation"
            label="Password Confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <TextField
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <Button variant="contained" type="submit" style={{ backgroundColor: '#B2DFDB', color: '#FFFFFF', marginTop: '20px', fontFamily: 'Raleway'}}>
            Create Account
          </Button>
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
