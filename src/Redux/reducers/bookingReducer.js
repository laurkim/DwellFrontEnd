const defaultState = [];

export function bookingReducer(state = defaultState, action) {
  switch (action.type) {
    case 'GET_BOOKINGS':
      return action.payload;
    default:
      return state;
  }
};
