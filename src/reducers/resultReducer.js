import {
  FETCH_RESULTS,
  INCREMENT_RESULTS,
  DECREMENT_RESULTS,
} from '../actions/types';

const INITIAL_STATE = {
  points: 0,
};

const resultReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_RESULTS:
      return { ...state, points: actions.payload };

    case INCREMENT_RESULTS:
      return {
        points: state.points + 2,
      };

    case DECREMENT_RESULTS:
      return {
        points: state.points - 1,
      };

    default:
      return state;
  }
};
export default resultReducer;
