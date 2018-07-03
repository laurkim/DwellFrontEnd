const defaultState = {
  user: "lo"
};

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return action.payload;
    case 'LOGIN_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return {};
    default:
      return state;
  }
};
