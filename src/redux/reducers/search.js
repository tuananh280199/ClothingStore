import * as actionTypes from '../actions/actionTypes';

const searchReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FILTER_TASK:
      return [];
    case actionTypes.FILTER_TASK_SUCCESSED:
      return action.data;
    case actionTypes.FILTER_TASK_FAILED:
      return [];
    default:
      return state;
  }
};

export default searchReducer;
