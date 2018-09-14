import React from 'react';
import '../App.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

const BookingDetail = props => {
  const yelpRedirect = () => {
    let url = props.booking.workspace.yelp_url;
    let newTab = window.open(url, '_blank');
    newTab.focus();
  }

  const formatDate = date => {
    let convertedDate = new Date(date);
    let month = convertedDate.getMonth() + 1;
    let day = convertedDate.getDay();
    let year = convertedDate.getFullYear();
    let hours = convertedDate.getHours();
    let minutes = convertedDate.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    let time = hours + ':' + minutes + ' ' + ampm;
    return `${month}/${day}/${year} at ${time}`;
  }

  const { name, phone, image_url, address_one, city, zip_code } = props.booking.workspace

  return (
    <Card className="card card-booking">
      <CardHeader
        avatar={
          <Avatar className="icon">
            W
          </Avatar>
        }
        title={name}
        subheader={phone}
      />
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
          <br/>
          <br />
          Start Time: {formatDate(props.booking.start_time)}
          <br />
          End Time: {formatDate(props.booking.end_time)}
        </Typography>
      </CardContent>
      <IconButton aria-label="Open yelp url">
        <ShareIcon onClick={yelpRedirect} />
      </IconButton>
    </Card>
  )
}

export default BookingDetail;
