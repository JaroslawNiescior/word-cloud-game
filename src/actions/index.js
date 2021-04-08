import questions from '../apis/mockApiResponse';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_QUESTIONS,
  FETCH_RESULTS,
  SHOW_ANSWERS,
  FINISH_GAME,
  INCREMENT_RESULTS,
  DECREMENT_RESULTS,
} from './types';

export const signIn = (userName) => ({
  type: SIGN_IN,
  payload: userName,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const finishGame = () => ({
  type: FINISH_GAME,
  payload: true,
});

export const fetchQuestions = () => ({
  type: FETCH_QUESTIONS,
  payload: questions,
});

export const fetchResults = (result) => ({
  type: FETCH_RESULTS,
  payload: result,
});
export const incrementResults = (result) => ({
  type: INCREMENT_RESULTS,
  payload: result,
});
export const decrementResults = (result) => ({
  type: DECREMENT_RESULTS,
  payload: result,
});

export const showAnswers = () => ({
  type: SHOW_ANSWERS,
  payload: true,
});
