import React, { Component } from 'react';
import Calendar from 'react-calendar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';

class BookingForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: new Date(),
      startTime: null,
      endTime: null
    }
  }

  handleTimeChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { startTime, endTime } = this.state;
    let bookingMonth = this.state.date.getMonth() + 1; // Months begin at 0 with Date
    let bookingDay = this.state.date.getDay();
    let bookingYear = this.state.date.getFullYear();
    let bookingStart = `${bookingMonth}/${bookingDay}/${bookingYear} ${startTime}`;
    let bookingEnd = `${bookingMonth}/${bookingDay}/${bookingYear} ${endTime}`;
    this.props.addBooking(bookingStart, bookingEnd);
  }

  handleDateChange = date => {
    this.setState({
      date
    })
  }

  render() {
    return (
      <div>
        <Typography className="confirm-booking">
          Book a one hour slot to work here!
        </Typography>
        <form onSubmit={this.handleSubmit} className="booking-form">
          <Calendar
            className="booking-calendar"
            onChange={this.handleDateChange}
            value={this.state.date}
          />
          <TextField
            className="form-input"
            autocomplete="off"
            name="startTime"
            label="Start Time"
            placeholder="H:MM AM"
            value={this.state.startTime}
            onChange={this.handleTimeChange}
            />
          <br/>
          <TextField
            className="form-input"
            autocomplete="off"
            name="endTime"
            label="End Time"
            placeholder="H:MM AM"
            value={this.state.endTime}
            onChange={this.handleTimeChange}
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
