import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { workspaceReducer } from './workspaceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  workspaces: workspaceReducer
})

export default rootReducer;
