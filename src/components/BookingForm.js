import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookWorkspace } from '../Redux/actions/index.js';

class BookingForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startTime: null,
      endTime: null
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: (workspaceId, startTime, endTime) => dispatch(bookWorkspace(workspaceId, startTime, endTime))
  }
}

export default connect(null, mapDispatchToProps)(BookingForm);
