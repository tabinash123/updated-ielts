// store.js
import { createStore, combineReducers } from 'redux';

// Action types
export const SET_ANSWER = 'SET_ANSWER';
export const SET_CURRENT_PART = 'SET_CURRENT_PART';

// Action creators
export const setAnswer = (questionNo, answer) => ({
  type: SET_ANSWER,
  payload: { questionNo, answer }
});

export const setCurrentPart = (partNumber) => ({
  type: SET_CURRENT_PART,
  payload: partNumber
});

// Reducers
const answersReducer = (state = {}, action) => {
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

const currentPartReducer = (state = 1, action) => {
  switch (action.type) {
    case SET_CURRENT_PART:
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  answers: answersReducer,
  currentPart: currentPartReducer
});

// Create store
const store = createStore(rootReducer);

export default store;