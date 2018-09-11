import React from 'react';
import { connect }  from 'react-redux';
import '../App.css'
import WorkspaceDetail from './WorkspaceDetail.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

const WorkspaceList = props => {
  const workspaces = props.workspaces.map(workspace => {
    return <WorkspaceDetail key={workspace.id} workspace={workspace} />
  });

  return (
    <GridList cellHeight={'100vh'}>
      <GridListTile key="Subheader" cols={2}>
        <ListSubheader component="div">Workspaces</ListSubheader>
      </GridListTile>
      <div id="workspace-container">
        {props.workspaces.length > 0 ? workspaces : null}
      </div>
    </GridList>
  )
}

function mapStateToProps(state) {
  return {
    workspaces: state.workspaces,
    favorites: state.user.favorites
  }
};

export default connect(mapStateToProps)(WorkspaceList);
