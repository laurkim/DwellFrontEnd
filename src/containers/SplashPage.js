import React from 'react';
import '../SplashPage.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const SplashPage = (props) => {
  const registerLink = props => <Link to="/register" {...props} />
  const loginLink = props => <Link to="/login" {...props} />
  return (
    <div className="splash">
      <Typography variant="display4" style={{ fontFamily: 'Raleway', fontSize: '90px', paddingTop: '10%'}}>
        DWELL
      </Typography>
      <Typography variant="body1" gutterBottom style={{ fontFamily: 'Open Sans', fontStyle: 'italic', marginTop: '0.8%'}}>
        Book a space to work in any coffee shop in Manhattan.
      </Typography>
      <div className="buttons">
        <Button component={registerLink} variant="outlined" size="medium" style={{ fontFamily: 'Raleway', fontSize: '15px' }}>
          Register
        </Button>
        <div className="divider"></div>
        <Button component={loginLink} variant="outlined" size="medium" style={{ fontFamily: 'Raleway', fontSize: '15px' }}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default SplashPage;
