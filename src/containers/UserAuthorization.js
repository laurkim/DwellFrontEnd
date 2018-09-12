import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchWorkspaces } from '../Redux/actions/index.js';
import '../App.css';
import WorkspaceList from '../components/WorkspaceList.js';

class UserAuthorization extends Component {
  componentDidMount() {
    const history = this.props.history
    localStorage.length > 0 ? this.props.fetchUser() : history.push('/')
    this.props.fetchWorkspaces();
  }

  render() {
    return (
      <WorkspaceList />
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkspaces, fetchUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserAuthorization);
