import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWorkspaces } from '../Redux/actions/index.js';
import WorkspaceList from '../components/WorkspaceList.js';

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
        <h1>Inside User Auth Component</h1>
        <WorkspaceList />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkspaces: fetchWorkspaces }, dispatch);
}

export default connect(null, mapDispatchToProps)(UserAuthorization);
