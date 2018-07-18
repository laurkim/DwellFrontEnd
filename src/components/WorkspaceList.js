import React, { Component } from 'react';
import { connect }  from 'react-redux';
import WorkspaceDetail from './WorkspaceDetail.js';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: 500,
    height: 450,
  }
};

const WorkspaceList = props => {
  const workspaces = props.workspaces.map(workspace => {
    return <WorkspaceDetail key={workspace.id} workspace={workspace} />
  });
  return (
    <div className={styles.root}>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Workspaces</ListSubheader>
        </GridListTile>
        {props.workspaces.length > 0 ? workspaces : null}
      </GridList>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    workspaces: state.workspaces
  }
};

export default connect(mapStateToProps)(WorkspaceList);
