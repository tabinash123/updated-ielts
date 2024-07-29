// FillInTheBlank.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';

const { Title, Paragraph } = Typography;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const StyledInput = styled(Input)`
  width: 150px;
  margin: 0 5px;
`;

const QuestionItem = styled.div`
  margin-bottom: 10px;
`;

const FillInTheBlank = ({ data }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (questionNo, value) => {
    setAnswers(prev => ({ ...prev, [questionNo]: value }));
  };

  const firstQuestionNo = data.questions[0].questionNo;
  const lastQuestionNo = data.questions[data.questions.length - 1].questionNo;

  return (
    <QuestionWrapper>
      <Title level={4}>Questions {firstQuestionNo}-{lastQuestionNo}</Title>
      <Title level={5}>{data.title}</Title>
      <Paragraph>{data.instruction}</Paragraph>
      {data.questions.map((question) => (
        <QuestionItem key={question.questionNo}>
          <strong>{question.questionNo}.</strong>{' '}
          {question.text.split('{BLANK:' + question.questionNo + '}').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <StyledInput
                  placeholder={question.questionNo.toString()}
                  value={answers[question.questionNo] || ''}
                  onChange={(e) => handleChange(question.questionNo, e.target.value)}
                />
              )}
            </React.Fragment>
          ))}
        </QuestionItem>
      ))}
    </QuestionWrapper>
  );
};

export default FillInTheBlank;