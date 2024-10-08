import React from 'react';
import { Radio, Space, Typography } from 'antd';
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

const MCQComponent = ({ questionSet, answers, setAnswer, isPlaying }) => {
  const handleChange = (questionNo, value) => {
    if (isPlaying) {
      setAnswer(questionNo, value);
    }
  };

  const questionRange = `${questionSet.questions[0].questionNo}–${questionSet.questions[questionSet.questions.length - 1].questionNo}`;

  return (
    <div>
      <Title level={4}>Questions {questionRange}</Title>
      <Title level={3}>{questionSet.title}</Title>
      <Paragraph>{questionSet.instruction}</Paragraph>
      {questionSet.questions.map((question, index) => (
        <QuestionWrapper key={index} isPlaying={isPlaying}>
          <QuestionText>
            <strong>{question.questionNo}.</strong> {question.text}
          </QuestionText>
          <Radio.Group 
            onChange={(e) => handleChange(question.questionNo, e.target.value)}
            value={answers[question.questionNo]}
            disabled={!isPlaying}
          >
            <Space direction="vertical">
              {question.options.map((option, optionIndex) => (
                <Radio key={optionIndex} value={option.charAt(0)}>
                  {option}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </QuestionWrapper>
      ))}
    </div>
  );
};

export default MCQComponent;