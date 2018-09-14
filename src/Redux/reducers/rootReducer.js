import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { workspaceReducer } from './workspaceReducer';
import { bookingReducer } from './bookingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  workspaces: workspaceReducer,
  bookings: bookingReducer
})

export default rootReducer;
