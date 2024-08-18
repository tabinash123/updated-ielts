// store.js
import { createStore, combineReducers } from 'redux';
import { SET_ANSWER, SET_CURRENT_PART, SUBMIT_ANSWERS } from './actions';

const initialState = {
  answers: {},
  currentPart: 1,
  submittedAnswers: null
};

const answersReducer = (state = initialState.answers, action) => {
  switch (action.type) {
    case SET_ANSWER:
      return {
        ...state,
        [action.payload.questionNo]: action.payload.answer
      };
    default:
      return state;
  }
};

const currentPartReducer = (state = initialState.currentPart, action) => {
  switch (action.type) {
    case SET_CURRENT_PART:
      return action.payload;
    default:
      return state;
  }
};

const submittedAnswersReducer = (state = initialState.submittedAnswers, action) => {
  switch (action.type) {
    case SUBMIT_ANSWERS:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  answers: answersReducer,
  currentPart: currentPartReducer,
  submittedAnswers: submittedAnswersReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;