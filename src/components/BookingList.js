import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBookings } from '../Redux/actions/index.js';
import '../App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import HamburgerMenu from './HamburgerMenu.js';
import BookingDetail from './BookingDetail.js';

class BookingList extends Component {
  componentDidMount() {
    this.props.fetchBookings();
  }

  renderBookings = () => {
    return this.props.bookings.map(booking => <BookingDetail key={booking.id} booking={booking} />)
  }

  render() {
    return (
      <GridList>
        <GridListTile id="grid-subheader" key="Subheader" cols={2}>
          <Typography id="dwell-title">
            DWELL
          </Typography>
        </GridListTile>
        <HamburgerMenu />
        <div id="main-container">
          {this.props.bookings.length > 0 ? this.renderBookings() : null}
        </div>
      </GridList>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBookings }, dispatch)
}

function mapStateToProps(state) {
  return {
    bookings: state.bookings
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingList);
