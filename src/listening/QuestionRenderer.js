// QuestionRenderer.js
import React from 'react';
import FillInTheBlank from './questionType/FillInTheBlank';
import MultipleChoice from './questionType/MultipleChoice';
import CategoryMatching from './questionType/CategoryMatching';

const QuestionRenderer = ({ questionData }) => {
  switch (questionData.type) {
    case 'fillInTheBlank':
      return <FillInTheBlank data={questionData} />;
    case 'mcq':
      return <MultipleChoice data={questionData} />;
    case 'categoryMatching':
      return <CategoryMatching data={questionData} />;
    default:
      return <div>Unsupported question type</div>;
  }
};

export default QuestionRenderer;