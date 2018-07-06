import React, { Component } from 'react';
import { connect }  from 'react-redux';
import WorkspaceDetail from './WorkspaceDetail.js';

const WorkspaceList = props => {
  const workspaces = props.workspaces.map(workspace => {
    return <WorkspaceDetail key={workspace.id} workspace={workspace} />
  });
  return (
    <div>
      {props.workspaces.length > 0 ? workspaces : null}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    workspaces: state.workspaces
  }
};

export default connect(mapStateToProps)(WorkspaceList);
