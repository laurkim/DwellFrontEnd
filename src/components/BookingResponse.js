import React from 'react';
import Typography from '@material-ui/core/Typography';
import '../App.css';

const BookingResponse = props => {
  return (
    <Typography className="booking-message" variant="headline" gutterBottom>
      {props.response}
    </Typography>
  )
}

export default BookingResponse;
