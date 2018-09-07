import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';

class BookingForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startTime: null,
      endTime: null
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { startTime, endTime } = this.state;
    this.props.addBooking(startTime, endTime);
  }

  render() {
    return (
      <div>
        <Typography className="confirm-booking">
          Book a one hour slot to work here!
        </Typography>
        <form onSubmit={this.handleSubmit} className="form-break">
          <TextField
            className="form-input"
            autocomplete="off"
            name="startTime"
            label="Start Time"
            placeholder="M/DD/YY 9:00 AM"
            value={this.state.startTime}
            onChange={this.handleChange}
            />
          <br/>
          <TextField
            className="form-input"
            autocomplete="off"
            name="endTime"
            label="End Time"
            placeholder="M/DD/YY 10:00 AM"
            value={this.state.endTime}
            onChange={this.handleChange}
            />
          <br/>
          <Button className="submit-button" variant="contained" type="submit">
            Confirm Booking
          </Button>
        </form>
      </div>
    )
  }
}

export default BookingForm;
