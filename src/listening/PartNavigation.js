import React from 'react';
import styled from 'styled-components';

const FooterNav = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f2f5;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  z-index: 1000;
  height: auto;
  min-height: 70px;
  padding: 10px 0px;
`;

const PartOptionsContainer = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
  gap 2px;
`;

const PartOption = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  border-right: 1px solid #d9d9d9;
  padding: 5px;
  overflow-y: auto;
  max-height: 150px;
  // box-shadow: ${props => props.isActive ? 'inset 0 -2px 0 #1890ff' : 'none'};

  &:hover {
    background-color: #f5f5f5;
  }

  // &:last-child {
  //   border-right: none;
  // }
`;

const PartTitle = styled.div`
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  margin-bottom: 8px;
  color: ${props => props.isActive ? '#1890ff' : 'inherit'};
`;

const QuestionNumbersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
`;

const QuestionNumber = styled.div`
  font-size: 12px;
  padding: 2px 4px;
  border-radius: 3px;
  background-color: ${props => props.isAnswered ? '#52c41a' : 'transparent'};
  color: ${props => props.isAnswered ? '#fff' : 'inherit'};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isAnswered ? '#73d13d' : '#e6f7ff'};
  }
`;

const ProgressRatio = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;

const SubmitButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #52c41a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: #73d13d;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(82, 196, 26, 0.2);
  }
`;

const PartNavigation = ({ parts, currentPart, onPartChange, onQuestionClick, answers, onSubmit }) => {
  const getQuestionNumbers = (part) => {
    return part.questions.flatMap(qs => qs.questions.map(q => q.questionNo));
  };

  const getProgressRatio = (part) => {
    const questionNumbers = getQuestionNumbers(part);
    const answeredCount = questionNumbers.filter(qNo => answers[qNo] !== undefined && answers[qNo] !== '').length;
    return `${answeredCount}/${questionNumbers.length}`;
  };

  const isQuestionAnswered = (questionNo) => {
    return answers[questionNo] !== undefined && answers[questionNo] !== '';
  };

  return (
    <FooterNav>
      <PartOptionsContainer>
        {parts.map((part, index) => (
          <PartOption
            key={index}
            onClick={() => onPartChange(index + 1)}
            isActive={currentPart === index + 1}
          >
            <PartTitle isActive={currentPart === index + 1}>Part {index + 1}</PartTitle>
            {currentPart === index + 1 ? (
              <QuestionNumbersContainer>
                {getQuestionNumbers(part).map(questionNo => (
                  <QuestionNumber
                    key={questionNo}
                    isAnswered={isQuestionAnswered(questionNo)}
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuestionClick(questionNo);
                    }}
                    aria-label={`Question ${questionNo}, ${isQuestionAnswered(questionNo) ? 'answered' : 'not answered'}`}
                  >
                    {questionNo}
                  </QuestionNumber>
                ))}
              </QuestionNumbersContainer>
            ) : (
              <ProgressRatio>{getProgressRatio(part)}</ProgressRatio>
            )}
          </PartOption>
        ))}
      </PartOptionsContainer>
      <SubmitButtonContainer>
        <SubmitButton onClick={onSubmit}>
          Submit Test
        </SubmitButton>
      </SubmitButtonContainer>
    </FooterNav>
  );
};

export default PartNavigation;