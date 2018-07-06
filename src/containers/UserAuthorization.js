import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWorkspaces } from '../Redux/actions/index.js';

class UserAuthorization extends Component {
  componentDidMount() {
    if (localStorage.token === undefined) {
      this.props.history.push('/')
    }
    this.props.fetchWorkspaces();
  }

  render() {
    return (
      <div>
        <h1>HI HI HI HI HI HI</h1>
        <p>Inside User Auth Component</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWorkspaces: fetchWorkspaces}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorization);
