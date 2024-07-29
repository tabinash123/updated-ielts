// CategoryMatching.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Select } from 'antd';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`;

const QuestionItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const QuestionText = styled.span`
  margin-right: 10px;
`;

const StyledSelect = styled(Select)`
  width: 120px;
`;

const CategoryMatching = ({ data }) => {
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
          <QuestionText>
            <strong>{question.questionNo}</strong> {question.text}
          </QuestionText>
          <StyledSelect
            placeholder="Select"
            onChange={(value) => handleChange(question.questionNo, value)}
            value={answers[question.questionNo]}
          >
            {data.options.map((option, index) => (
              <Option key={index} value={option.letter}>
                {option.letter}. {option.text}
              </Option>
            ))}
          </StyledSelect>
        </QuestionItem>
      ))}
    </QuestionWrapper>
  );
};

export default CategoryMatching;