import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookWorkspace } from '../Redux/actions/index.js';
import BookingForm from './BookingForm.js';
import '../App.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from '@material-ui/core/Modal';

class WorkspaceDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  addBooking = (startTime, endTime) => {
    let bookingStart = new Date(startTime).getTime();
    let bookingEnd = new Date(endTime).getTime();
    this.props.bookWorkspace(this.props.workspace.id, bookingStart, bookingEnd);
  }

  handleOpen = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { name, image_url, yelp_url, rating, address_one, address_two, city, zip_code, latitude, longitude, phone } = this.props.workspace
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
              <BookingForm addBooking={this.addBooking} />
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
          </Card>
    )
  }
};

function mapDispatchToProps(dispatch) {
  return {
    bookWorkspace: (workspaceId, startTime, endTime) => dispatch(bookWorkspace(workspaceId, startTime, endTime))
  }
}

export default connect(null, mapDispatchToProps)(WorkspaceDetail);
