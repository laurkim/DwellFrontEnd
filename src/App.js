import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SplashPage from './containers/SplashPage.js'
import UserAuthorization from './containers/UserAuthorization.js';
import UserRegistration from './components/UserRegistration.js';
import UserLogin from './components/UserLogin.js';

class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header"> */}
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <h1 className="App-title">Welcome to React</h1> */}
        {/* </header> */}
        <Route exact path="/" component={SplashPage} />
        <Route exact path="/home" component={UserAuthorization} />
        <Route exact path="/register" component={UserRegistration} />
        <Route exact path="/login" component={UserLogin} />
      </div>
    );
  }
}

export default App;
