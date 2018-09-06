import React from 'react';

const BookingForm extends Component {
  addBooking = () => {
    this.props.bookWorkspace(this.props.workspace.id, this.state.startTime, this.endTime);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: (workspaceId, startTime, endTime) => dispatch(bookWorkspace(workspaceId, startTime, endTime))
  }
}

export default connect(null, mapDispatchToProps)(BookingForm);
