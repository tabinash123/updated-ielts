// MultipleChoice.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Radio, Space } from 'antd';

const { Title, Paragraph } = Typography;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const QuestionItem = styled.div`
  margin-bottom: 20px;
`;

const MultipleChoice = ({ data }) => {
  const [answers, setAnswers] = useState({});

  const handleChange = (questionNo, e) => {
    setAnswers(prev => ({ ...prev, [questionNo]: e.target.value }));
  };

  const firstQuestionNo = data.questions[0].questionNo;
  const lastQuestionNo = data.questions[data.questions.length - 1].questionNo;

  return (
    <QuestionWrapper>
      <Title level={4}>Questions {firstQuestionNo}-{lastQuestionNo}</Title>
      <Paragraph>{data.instruction}</Paragraph>
      {data.questions.map((question) => (
        <QuestionItem key={question.questionNo}>
          <Paragraph>
            <strong>{question.questionNo}.</strong> {question.text}
          </Paragraph>
          <Radio.Group 
            onChange={(e) => handleChange(question.questionNo, e)}
            value={answers[question.questionNo]}
          >
            <Space direction="vertical">
              {question.options.map((option, index) => (
                <Radio key={index} value={option}>
                  {option}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </QuestionItem>
      ))}
    </QuestionWrapper>
  );
};

export default MultipleChoice;