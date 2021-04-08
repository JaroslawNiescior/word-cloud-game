import { FETCH_QUESTIONS } from '../actions/types';

const INITIAL_STATE = {
  questions: null,
};

const questionsReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: actions.payload };

    default:
      return state;
  }
};

export default questionsReducer;
