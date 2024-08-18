// actions.js

// Action types
export const SET_ANSWER = 'SET_ANSWER';
export const SET_CURRENT_PART = 'SET_CURRENT_PART';
export const SUBMIT_ANSWERS = 'SUBMIT_ANSWERS';

// Action creators
export const setAnswer = (questionNo, answer) => ({
  type: SET_ANSWER,
  payload: { questionNo, answer }
});

export const setCurrentPart = (partNumber) => ({
  type: SET_CURRENT_PART,
  payload: partNumber
});

export const submitAnswers = (submittedAnswers) => ({
  type: SUBMIT_ANSWERS,
  payload: submittedAnswers
});