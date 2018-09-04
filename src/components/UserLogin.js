import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { loginUser } from '../Redux/actions/index.js';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserLogin extends Component {
  constructor(props) {
    super(props)

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
      <div className="user-forms">
        <Typography variant="display2" gutterBottom style={{ fontFamily: 'Raleway', paddingTop: '10%' }}>
          Login to DWELL
        </Typography>
        <form onSubmit={this.loginUser} style={{ paddingTop: '2%' }} >
          <TextField
            autocomplete="off"
            name="username"
            label="Username"
            value={this.state.username}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <TextField
            autocomplete="off"
            type="password"
            name="password"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange}
            style={{ marginLeft: '10px', marginRight: '10px', width: 200 }}
          />
          <br/>
          <Button variant="contained" type="submit" style={{ backgroundColor: '#B2DFDB', color: '#FFFFFF', marginTop: '20px', fontFamily: 'Raleway'}}>
            Login
          </Button>
        </form>
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
