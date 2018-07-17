import React, { Component } from 'react';
import { connect }  from 'react-redux';
import WorkspaceDetail from './WorkspaceDetail.js';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';


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
  },
  icon: {
    color: '#FFFFFF'
  },
};

const WorkspaceList = props => {
  const workspaces = props.workspaces.map(workspace => {
    // debugger
    return <WorkspaceDetail key={workspace.id} workspace={workspace} />
  });
  return (
    <div className={styles.root}>
      <GridList cellHeight={180} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {props.workspaces.length > 0 ? workspaces : null}
      </GridList>
    </div>
  )
}

// {props.workspaces.map(tile => (
//   <GridListTile key={tile.id}>
//     <img src={tile.image_url} alt={tile.name} />
//     <GridListTileBar
//       title={tile.name}
//       subtitle={<span>by: {tile.address_one}</span>}
//       actionIcon={
//         <IconButton className={styles.icon}>
//           <DoneAllIcon style={{color: '#FFFFFF'}}/>
//         </IconButton>
//       }
//     />
//   </GridListTile>
// ))}


// <div>
//   {props.workspaces.length > 0 ? workspaces : null}
// </div>
function mapStateToProps(state) {
  return {
    workspaces: state.workspaces
  }
};

export default connect(mapStateToProps)(WorkspaceList);
