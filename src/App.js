import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SplashPage from './containers/SplashPage.js'
import UserAuthorization from './containers/UserAuthorization.js';
import UserRegistration from './components/UserRegistration.js';
import UserLogin from './components/UserLogin.js';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/home" component={UserAuthorization} />
        <Route exact path="/register" component={UserRegistration} />
        <Route exact path="/login" component={UserLogin} />
      </div>
    );
  }
}

export default App;
