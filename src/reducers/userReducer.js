import { SIGN_IN, SIGN_OUT, FINISH_GAME } from '../actions/types';

const INITIAL_STATE = {
  userName: null,
  isSignedIn: null,
  isGameFinish: false,
};

const userReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userName: actions.payload };

    case SIGN_OUT:
      return { ...state, isSignedIn: false, userName: null };

    case FINISH_GAME:
      return { ...state, isGameFinish: true };

    default:
      return state;
  }
};
export default userReducer;
