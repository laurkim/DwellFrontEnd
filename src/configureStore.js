import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer  from './Redux/reducers/rootReducer';

const history = createBrowserHistory();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    return createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        thunk              // ... other middlewares ...
      ),
    ),
  )
}

export default configureStore;
