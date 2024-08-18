import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, message } from 'antd';
import styled from 'styled-components';
import { setAnswer } from './store';
import { listeningData } from './listeningData ';
import MCQComponent from './questionType/MCQComponent';
import ShortAnswerComponent from './questionType/ShortAnswerComponent';
import FillInTheBlankComponent from './questionType/FillInTheBlankComponent';
import CategoryMatchingComponent from './questionType/CategoryMatchingComponent';
import LinearFooter from './ListeningFooter';

const AudioPlayer = styled.audio`
  width: 100%;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  margin-bottom: 60px; // Add space for the footer
`;

const ListeningSection = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();

  const currentPartData = listeningData.parts[currentPart];
  const totalQuestions = currentPartData.questions.reduce(
    (total, questionSet) => total + questionSet.questions.length,
    0
  );

  useEffect(() => {
    const audio = document.getElementById('audioPlayer');
    audio.addEventListener('ended', handleAudioEnd);
    return () => audio.removeEventListener('ended', handleAudioEnd);
  }, [currentPart]);

  const handleAudioEnd = () => {
    setIsPlaying(false);
    if (currentPart < listeningData.parts.length - 1) {
      message.info('Please review your answers before moving to the next part.');
    } else {
      message.success('You have completed the listening test!');
    }
  };

  const startListening = () => {
    const audio = document.getElementById('audioPlayer');
    audio.currentTime = currentPartData.startTime;
    audio.play();
    setIsPlaying(true);
  };

  const handleSetAnswer = (questionNo, answer) => {
    dispatch(setAnswer(questionNo, answer));
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

  const handleQuestionClick = (questionNumber) => {
    setCurrentQuestion(questionNumber);
    // You may want to add logic here to scroll to the selected question
  };

  return (
    <ContentContainer>
      <h1>IELTS Listening Test</h1>
      <h2>Part {currentPartData.part}</h2>
      <AudioPlayer id="audioPlayer" controls src={listeningData.audio.src} />
      {!isPlaying && (
        <Button onClick={startListening} type="primary">
          Start Listening
        </Button>
      )}
      {currentPartData.questions.map((questionSet, index) => (
        <div key={index}>
          {renderQuestionSet(questionSet)}
        </div>
      ))}
      <LinearFooter 
        currentPart={currentPart + 1}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        onQuestionClick={handleQuestionClick}
      />
    </ContentContainer>
  );
};

export default ListeningSection;