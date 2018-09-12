import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookWorkspace, favoriteWorkspace } from '../Redux/actions/index.js';
import BookingForm from './BookingForm.js';
import BookingResponse from './BookingResponse.js';
import '../App.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from '@material-ui/core/Modal';

class WorkspaceDetail extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
      confirmed: false,
      response: null
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  }

  addBooking = (startTime, endTime) => {
    let bookingStart = new Date(startTime).getTime();
    let bookingEnd = new Date(endTime).getTime();
    this.props.bookWorkspace(this.props.workspace.id, bookingStart, bookingEnd, this.bookingComplete);
  }

  bookingComplete = response => {
    this.setState({
      confirmed: true,
      response: response.message
    })
  }

  addToFavorites = () => {
    this.props.favoriteWorkspace(this.props.workspace.id)
  }

  render() {
    console.log("props are", this.props);
    const { name, image_url, yelp_url, rating, address_one, address_two, city, zip_code, latitude, longitude, phone } = this.props.workspace
    const bookingForm = <BookingForm addBooking={this.addBooking} confirmed={this.state.confirmed} response={this.state.response} />
    const bookingMessage = <BookingResponse response={this.state.response} />
    return (
      <Card className="card">
        <CardHeader
          avatar={
            <Avatar className="icon">
              W
            </Avatar>
          }
          action={
            <IconButton onClick={this.handleOpen}>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={phone}
        />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          >
          <div className="modal">
            {this.state.confirmed === false ? bookingForm : bookingMessage}
          </div>
        </Modal>
        <CardMedia
          className="card-img"
          image={image_url}
          title={name}
        />
        <CardContent>
          <Typography component="p">
            {address_one}
            <br />
            {city}, {zip_code}
          </Typography>
        </CardContent>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon onClick={this.addToFavorites} />
        </IconButton>
      </Card>
    )
  }
};

function mapStateToProps(state) {
  return {
    favorites: state.user.favorites
  }
};

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: (workspaceId, startTime, endTime, callback) => dispatch(bookWorkspace(workspaceId, startTime, endTime, callback)),
    favoriteWorkspace: workspaceId => dispatch(favoriteWorkspace(workspaceId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceDetail);
