import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookWorkspace } from '../Redux/actions/index.js';

class WorkspaceDetail extends Component {
  constructor(props) {
    super(props);
  }

  addBooking = event => {
    let startTime = 10
    let endTime = 11
    this.props.bookWorkspace(this.props.workspace.id, startTime, endTime);
  }

  render() {
    const { id, name, image_url, yelp_url, rating, address_one, address_two, city, zip_code, latitude, longitude, phone } = this.props.workspace
    return (
      <div>
        <h3>{name}</h3>
        <img className="workspace" src={image_url} alt="{name}"/>
        <p>{address_one}</p>
        { address_two.length > 0 ? <p>{address_two}</p> : null }
        <p>{city} {zip_code}</p>
        <p>{phone}</p>
        <a href={yelp_url}>Business Details</a>
        <br/>
        <button onClick={this.addBooking}>Book Space</button>
      </div>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: (workspaceId, startTime, endTime) => dispatch(bookWorkspace(workspaceId, startTime, endTime))
  }
}

export default connect(null, mapDispatchToProps)(WorkspaceDetail);
