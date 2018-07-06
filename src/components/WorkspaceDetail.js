import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookWorkspace } from '../Redux/actions/index.js';

class WorkspaceDetail extends Component {
  constructor(props) {
    super(props)
  }

  addBooking = event => {
    console.log("props r", this.props);
    this.props.bookWorkspace(this.props.workspace.id);
  }

  render() {
    const { id, name, image_url, yelp_url, rating, address_one, address_two, city, zip_code, latitude, longitude, phone } = this.props.workspace
    return (
      <div>
        <h3>{name}</h3>
        <img className="workspace" src={image_url} alt="{name} image"/>
        <p>{address_one}</p>
        <p>{city}</p>
        <p>{phone}</p>
        <button onClick={this.addBooking}>Book Space</button>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: workspaceId => dispatch(bookWorkspace(workspaceId))
  }
}

export default connect(null, mapDispatchToProps)(WorkspaceDetail);
