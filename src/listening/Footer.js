// Footer.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPart } from './store';
import { listeningData } from './listeningData ';

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: #f0f2f5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: auto;
`;

const PartButton = styled.div`
  padding: 5px 10px;
  margin-right: 10px;
  cursor: pointer;
  border-right: 1px solid #d9d9d9;
  white-space: nowrap;

  &:last-child {
    border-right: none;
  }
`;

const PartTitle = styled.span`
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  color: ${props => props.isActive ? '#1890ff' : 'black'};
`;

const QuestionInfo = styled.span`
  margin-left: 5px;
  font-size: 0.9em;
  color: #888;
`;

const Footer = () => {
  const currentPart = useSelector(state => state.currentPart);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();

  const handlePartChange = (partNumber) => {
    dispatch(setCurrentPart(partNumber));
  };

  const getQuestionNumbers = (part) => {
    return part.questions.flatMap(qs => qs.questions.map(q => q.questionNo));
  };

  const getAttemptedCount = (questionNumbers) => {
    return questionNumbers.filter(qNo => answers[qNo]).length;
  };

  return (
    <FooterWrapper>
      {listeningData.parts.map((part, index) => {
        const questionNumbers = getQuestionNumbers(part);
        const isActive = currentPart === part.part;
        const attemptedCount = getAttemptedCount(questionNumbers);
        const firstQuestion = Math.min(...questionNumbers);
        const lastQuestion = Math.max(...questionNumbers);

        return (
          <PartButton key={index} onClick={() => handlePartChange(part.part)}>
            <PartTitle isActive={isActive}>
              Part {part.part}
            </PartTitle>
            <QuestionInfo>
              {isActive 
                ? `${firstQuestion}-${lastQuestion}`
                : `${attemptedCount} of ${questionNumbers.length}`
              }
            </QuestionInfo>
          </PartButton>
        );
      })}
    </FooterWrapper>
  );
};

export default Footer;