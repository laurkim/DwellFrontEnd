import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { loginUser } from '../Redux/actions/index.js';
import '../App.css';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserLogin extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  loginUser = event => {
    event.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    let loginInput = { username, password };
    event.target.reset();
    this.props.loginUser(loginInput, this.props.history);
  }

  render() {
    return (
      <div className="user-form">
        <Typography className="form-title" variant="display2" gutterBottom>
          Login to DWELL
        </Typography>
        <form onSubmit={this.loginUser} className="form-break">
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
          <Button className="submit-button" variant="contained" type="submit">
            Login
          </Button>
        </form>
        <p>Click <Link to="/register">here</Link> to register.</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loginUser: (loginInput, history) => dispatch(loginUser(loginInput, history))
  }
}

export default connect(null, mapDispatchToProps)(UserLogin);
