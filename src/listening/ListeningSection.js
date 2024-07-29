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

const AudioPlayer = styled.audio`
  width: 100%;
  margin-bottom: 20px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ListeningSection = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();

  const currentPartData = listeningData.parts[currentPart];

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

  const handleSubmit = () => {
    const allQuestions = listeningData.parts.flatMap(part => 
      part.questions.flatMap(questionSet => 
        questionSet.questions.map(q => q.questionNo)
      )
    );

    const finalAnswers = allQuestions.reduce((acc, questionNo) => {
      acc[questionNo] = answers[questionNo] || null;
      return acc;
    }, {});

    console.log('Submitted Answers:', finalAnswers);
    message.success('Test submitted successfully!');
  };

  const goToNextPart = () => {
    if (currentPart < listeningData.parts.length - 1) {
      setCurrentPart(currentPart + 1);
      setIsPlaying(false);
    }
  };

  const goToPreviousPart = () => {
    if (currentPart > 0) {
      setCurrentPart(currentPart - 1);
      setIsPlaying(false);
    }
  };

  return (
    <div>
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
      <NavigationButtons>
        <Button onClick={goToPreviousPart} disabled={currentPart === 0}>
          Previous Part
        </Button>
        <Button onClick={handleSubmit} type="primary">
          Submit Test
        </Button>
        <Button onClick={goToNextPart} disabled={currentPart === listeningData.parts.length - 1}>
          Next Part
        </Button>
      </NavigationButtons>
    </div>
  );
};

export default ListeningSection;