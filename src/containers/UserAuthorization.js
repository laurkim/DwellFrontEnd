import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchWorkspaces } from '../Redux/actions/index.js';
import '../App.css';
import WorkspaceList from '../components/WorkspaceList.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

class UserAuthorization extends Component {
  componentDidMount() {
    const history = this.props.history
    localStorage.length > 0 ? this.props.fetchUser() : history.push('/')
    this.props.fetchWorkspaces();
  }

  render() {
    return (
      <GridList>
        <GridListTile id="grid-subheader" key="Subheader" cols={2}>
          <Typography id="dwell-title">
            DWELL
          </Typography>
        </GridListTile>
        <WorkspaceList />
      </GridList>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkspaces, fetchUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserAuthorization);
