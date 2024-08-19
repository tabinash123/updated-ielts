import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, message, Progress, Modal } from 'antd';
import styled from 'styled-components';
import { setAnswer, setCurrentPart, submitAnswers } from './utils/actions';
import { listeningData } from './listeningData';
import MCQComponent from './questionType/MCQComponent';
import ShortAnswerComponent from './questionType/ShortAnswerComponent';
import FillInTheBlankComponent from './questionType/FillInTheBlankComponent';
import CategoryMatchingComponent from './questionType/CategoryMatchingComponent';
import PartNavigation from './PartNavigation';

const ContentContainer = styled.div`
  margin-bottom: 60px;
  padding: 40px;
   
`;

const SubmitButton = styled(Button)`
  margin-top: 20px;
`;

const ProgressWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ListeningSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const currentPart = useSelector(state => state.currentPart);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();

  const totalQuestions = useMemo(() => listeningData.parts.reduce(
    (total, part) => total + part.questions.reduce(
      (partTotal, questionSet) => partTotal + questionSet.questions.length,
      0
    ),
    0
  ), []);

  const answeredQuestions = useMemo(() => 
    Object.values(answers).filter(answer => answer !== null && answer !== '').length,
    [answers]
  );

  useEffect(() => {
    const audio = new Audio(listeningData.audio.src);
    
    const handleEnded = () => {
      setIsPlaying(false);
      message.success('You have completed the listening test!');
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const startListening = () => {
    const audio = new Audio(listeningData.audio.src);
    audio.play();
    setIsPlaying(true);
  };

  const handleSetAnswer = (questionNo, answer) => {
    dispatch(setAnswer(questionNo, answer));
  };

  const handlePartChange = (partNumber) => {
    dispatch(setCurrentPart(partNumber));
  };

  const renderQuestionSet = (questionSet) => {
    const props = {
      questionSet,
      answers,
      setAnswer: handleSetAnswer,
      isPlaying
    };

    switch (questionSet.type) {
      case 'mcq':
        return <MCQComponent {...props} />;
      case 'shortAnswer':
        return <ShortAnswerComponent {...props} />;
      case 'fillInTheBlank':
        return <FillInTheBlankComponent {...props} />;
      case 'categoryMatching':
        return <CategoryMatchingComponent {...props} />;
      default:
        return <div>Unknown question type</div>;
    }
  };

  const handleSubmit = () => {
    Modal.confirm({
      title: 'Submit Answers',
      content: `You have answered ${answeredQuestions} out of ${totalQuestions} questions. Are you sure you want to submit?`,
      onOk() {
        const submittedAnswers = {};
        for (let i = 1; i <= totalQuestions; i++) {
          submittedAnswers[i] = answers[i] || null;
        }
        dispatch(submitAnswers(submittedAnswers));
        
        console.log('Submitted Answers:', submittedAnswers);
        
        message.success('Answers submitted successfully!');
      },
      onCancel() {
        // User canceled submission
      },
    });
  };

  const handleQuestionClick = (questionNo) => {
    for (let part of listeningData.parts) {
      for (let questionSet of part.questions) {
        const question = questionSet.questions.find(q => q.questionNo === questionNo);
        if (question) {
          dispatch(setCurrentPart(part.part));
          return;
        }
      }
    }
  };

  return (
    <ContentContainer>
      <h1>IELTS Listening Test</h1>
     
      <h2>Part {currentPart}</h2>
      {!isPlaying && (
        <Button onClick={startListening} type="primary">
          Start Listening
        </Button>
      )}
      <ProgressWrapper>
        {/* <Progress 
          percent={(answeredQuestions / totalQuestions) * 100} 
          format={() => `${answeredQuestions}/${totalQuestions}`}
        /> */}
      </ProgressWrapper>
      {listeningData.parts.find(part => part.part === currentPart).questions.map((questionSet, index) => (
        <div key={index}>
          {renderQuestionSet(questionSet)}
        </div>
      ))}
      <PartNavigation
        parts={listeningData.parts}
        currentPart={currentPart}
        onPartChange={handlePartChange}
        onQuestionClick={handleQuestionClick}
        answers={answers}
        onSubmit={handleSubmit}
      />
    </ContentContainer>
  );
};

export default ListeningSection;