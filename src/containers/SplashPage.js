import React from 'react';
import '../SplashPage.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const SplashPage = (props) => {
  const registerLink = props => <Link to="/register" {...props} />
  const loginLink = props => <Link to="/login" {...props} />
  return (
    <div id="splash">
      <Typography id="title" variant="display4">
        DWELL
      </Typography>
      <Typography id="description" variant="body1" gutterBottom>
        Book a space to work in any coffee shop in Manhattan.
      </Typography>
      <div className="buttons">
        <Button className="splash-button" component={registerLink} variant="outlined" size="medium">
          Register
        </Button>
        <div className="divider"></div>
        <Button className="splash-button" component={loginLink} variant="outlined" size="medium">
          Login
        </Button>
      </div>
    </div>
  )
}

export default SplashPage;
