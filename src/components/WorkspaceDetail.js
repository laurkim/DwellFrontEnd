import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookWorkspace } from '../Redux/actions/index.js';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import DoneAllIcon from '@material-ui/icons/DoneAll';
// import verified from '../verified.png';

class WorkspaceDetail extends Component {
  constructor(props) {
    super(props);
  }

  addBooking = () => {
    console.log("add booking");
    let startTime = 10
    let endTime = 11
    this.props.bookWorkspace(this.props.workspace.id, startTime, endTime);
  }

  render() {
    const { id, name, image_url, yelp_url, rating, address_one, address_two, city, zip_code, latitude, longitude, phone } = this.props.workspace
    return (
      <GridListTile key={id} style={{width: '50%', height: '184px', padding: '2px',}}>
        <img src={image_url} alt={name} />
        <GridListTileBar
          title={name}
          subtitle={<span>by: {address_one}</span>}
          actionIcon={
            <IconButton>
             <DoneAllIcon style={{color: '#FFFFFF'}} onClick={this.addBooking}/>
            </IconButton>
          }
        />
      </GridListTile>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: (workspaceId, startTime, endTime) => dispatch(bookWorkspace(workspaceId, startTime, endTime))
  }
}

export default connect(null, mapDispatchToProps)(WorkspaceDetail);
