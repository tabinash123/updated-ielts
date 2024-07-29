import React from 'react';
import Question from './Question';

const Section = ({ section }) => {
  return (
    <div>
      <h2>{section.title}</h2>
      <p>{section.instructions}</p>
      {section.questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Section;