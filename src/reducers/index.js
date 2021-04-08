import { combineReducers } from 'redux';
import userReducer from './userReducer';
import questionsReducer from './questionsReducer';
import resultReducer from './resultReducer';
import answersReducer from './answersReducer';

export default combineReducers({
  user: userReducer,
  questions: questionsReducer,
  result: resultReducer,
  showAnswers: answersReducer,
});
