import React from 'react';
import { Input, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
  opacity: ${props => props.isPlaying ? 1 : 0.7};
`;

const QuestionText = styled(Paragraph)`
  font-weight: 500;
  margin-bottom: 8px;
`;

const InlineInput = styled(Input)`
  width: 80px;
  margin: 0 5px;
`;

const OptionsWrapper = styled.div`
  margin-top: 20px;
`;

const CategoryMatchingComponent = ({ questionSet, answers, setAnswer, isPlaying }) => {
  const handleChange = (questionNo, value) => {
    if (isPlaying) {
      setAnswer(questionNo, value);
    }
  };

  const questionRange = `${questionSet.questions[0].questionNo}–${questionSet.questions[questionSet.questions.length - 1].questionNo}`;

  const renderQuestion = (question) => {
    const parts = question.text.split('{BLANK:' + question.questionNo + '}');
    return (
      <>
        {parts[0]}
        <InlineInput 
          onChange={(e) => handleChange(question.questionNo, e.target.value)}
          value={answers[question.questionNo] || ''}
          disabled={!isPlaying}
          placeholder="A/B/C"
        />
        {parts[1]}
      </>
    );
  };

  return (
    <div>
      <Title level={3}>{questionSet.title}</Title>
      <Title level={4}>Questions {questionRange}</Title>
      <Paragraph>{questionSet.instruction}</Paragraph>
      {questionSet.questions.map((question, index) => (
        <QuestionWrapper key={index} isPlaying={isPlaying}>
          <QuestionText>
            <strong>{question.questionNo}</strong> {renderQuestion(question)}
          </QuestionText>
        </QuestionWrapper>
      ))}
      <OptionsWrapper>
        {questionSet.options.map((option, index) => (
          <Paragraph key={index}><strong>{option.letter}:</strong> {option.text}</Paragraph>
        ))}
      </OptionsWrapper>
    </div>
  );
};

export default CategoryMatchingComponent;