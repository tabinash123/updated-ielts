import React from 'react';
import styled from 'styled-components';
import { Typography, Input } from 'antd';

const { Title, Paragraph } = Typography;

const NoteCompletion = ({ data }) => {
  return (
    <div>
      <Title level={3}>{data.title}</Title>
      <Paragraph>{data.instruction}</Paragraph>
      {data.questions.map((question) => (
        <QuestionWrapper key={question.questionNo}>
          <QuestionText>
            {question.text.split('{BLANK}').map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <Input style={{ width: 120, margin: '0 5px' }} />}
              </React.Fragment>
            ))}
          </QuestionText>
        </QuestionWrapper>
      ))}
    </div>
  );
};

const QuestionWrapper = styled.div`
  margin-bottom: 15px;
`;

const QuestionText = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export default NoteCompletion;