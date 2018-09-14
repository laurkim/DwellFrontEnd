import React from 'react';
import { connect }  from 'react-redux';
import '../App.css'
import WorkspaceDetail from './WorkspaceDetail.js';

const WorkspaceList = props => {
  const workspaces = props.workspaces.map(workspace => {
    return <WorkspaceDetail key={workspace.id} workspace={workspace} />
  });

  return (
    <div id="workspace-container">
      {props.workspaces.length > 0 ? workspaces : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    workspaces: state.workspaces,
    favorites: state.user.favorites
  }
};

export default connect(mapStateToProps)(WorkspaceList);
