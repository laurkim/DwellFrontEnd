const defaultState = {
  workspaces: []
};

export function workspaceReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_WORKSPACES':
      return action.payload;
    default:
      return state;
  }
};
