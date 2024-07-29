import React from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';

const { Title, Paragraph } = Typography;

const ShortAnswer = ({ data }) => {
  const startQuestion = data.questions[0].questionNo;
  const endQuestion = data.questions[data.questions.length - 1].questionNo;

  return (
    <div>
      <Title level={3}>Questions {startQuestion}–{endQuestion}</Title>
      <Paragraph>{data.instruction}</Paragraph>
      <Title level={4}>{data.title}</Title>
      <QuestionList>
        {data.questions.map((question) => (
          <QuestionWrapper key={question.questionNo}>
            <QuestionText>
              • {question.text.split('{BLANK}').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && (
                    <InputWrapper>
                      <QuestionNumber>{question.questionNo}</QuestionNumber>
                      <Input style={{ width: 120 }} />
                    </InputWrapper>
                  )}
                </React.Fragment>
              ))}
            </QuestionText>
          </QuestionWrapper>
        ))}
      </QuestionList>
    </div>
  );
};

const QuestionList = styled.div`
  margin-left: 20px;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 15px;
`;

const QuestionText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const InputWrapper = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0 5px;
`;

const QuestionNumber = styled.span`
  position: absolute;
  top: -15px;
  left: 5px;
  font-size: 12px;
  color: #888;
`;

export default ShortAnswer;