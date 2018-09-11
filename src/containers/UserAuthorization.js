import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchWorkspaces } from '../Redux/actions/index.js';
import '../App.css';
import WorkspaceList from '../components/WorkspaceList.js';

class UserAuthorization extends Component {
  componentDidMount() {
    const history = this.props.history
    if (localStorage.token === undefined) {
      history.push('/');
    } else if (localStorage.length > 0) {
      let token = localStorage.token;
      this.props.fetchUser(token);
    }
    this.props.fetchWorkspaces();
  }

  render() {
    return (
      <div>
        <WorkspaceList />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    fetchUser: token => dispatch(fetchUser(token))
  };
}

export default connect(null, mapDispatchToProps)(UserAuthorization);
