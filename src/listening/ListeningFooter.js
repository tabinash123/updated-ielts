import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #f0f0f0;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const PartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PartTitle = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

const QuestionIndicators = styled.div`
  display: flex;
  gap: 5px;
`;

const QuestionIndicator = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #1890ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
  
  ${props => props.active && `
    background-color: #1890ff;
    color: white;
  `}
`;

const PartProgress = styled.div`
  margin-left: 10px;
`;

const LinearFooter = ({ 
  currentPart,
  currentQuestion,
  totalQuestions,
  onQuestionClick
}) => {
  return (
    <FooterContainer>
      <PartContainer>
        <PartTitle>Part {currentPart}</PartTitle>
        <QuestionIndicators>
          {[...Array(totalQuestions)].map((_, index) => (
            <QuestionIndicator 
              key={index}
              active={index + 1 === currentQuestion}
              onClick={() => onQuestionClick(index + 1)}
            >
              {index + 1}
            </QuestionIndicator>
          ))}
        </QuestionIndicators>
      </PartContainer>
      <PartProgress>
        {currentQuestion} of {totalQuestions}
      </PartProgress>
    </FooterContainer>
  );
};

export default LinearFooter;