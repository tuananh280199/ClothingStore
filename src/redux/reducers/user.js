import * as actionTypes from '../actions/actionTypes';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNIN:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
