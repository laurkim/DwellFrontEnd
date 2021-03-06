import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './configureStore.js';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
        <App history={history}/>
    </Provider>
  </Router>, document.getElementById('root'));
registerServiceWorker();
