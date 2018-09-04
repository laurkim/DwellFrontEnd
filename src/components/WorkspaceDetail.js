import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bookWorkspace } from '../Redux/actions/index.js';
import '../App.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class WorkspaceDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    }
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  };

  addBooking = () => {
    let startTime = 10
    let endTime = 11
    this.props.bookWorkspace(this.props.workspace.id, startTime, endTime);
  }

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
              <IconButton>
                <MoreVertIcon />
              </IconButton>
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
              <p>Address: {address_one}</p>
              <p>{city}, {zip_code}</p>
            </Typography>
          </CardContent>
          <CardActions style={{display: 'flex'}} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <IconButton
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
              >
              <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph variant="body2">
                  Some Filler Text
                </Typography>
                <Typography paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos illum, esse quod voluptatum? Nesciunt qui aperiam consequatur quasi eum, reiciendis impedit explicabo odit possimus soluta nam magnam quis excepturi.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione eos illum, esse quod voluptatum? Nesciunt qui aperiam consequatur quasi eum, reiciendis impedit explicabo odit possimus soluta nam magnam quis excepturi.
                </Typography>
              </CardContent>
            </Collapse>
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
