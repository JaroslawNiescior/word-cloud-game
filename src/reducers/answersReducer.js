import { SHOW_ANSWERS } from '../actions/types';

const answersReducer = (state = false, actions) => {
  switch (actions.type) {
    case SHOW_ANSWERS:
      return actions.payload;

    default:
      return state;
  }
};
export default answersReducer;
