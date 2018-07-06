import React, { Component } from 'react';

class WorkspaceDetail extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, name, image_url, yelp_url, rating, address_one, address_two, city, zip_code, latitude, longitude, phone } = this.props.workspace
    return (
      <div>
        <h3>{name}</h3>
      </div>
    )
  }
};

export default WorkspaceDetail;
