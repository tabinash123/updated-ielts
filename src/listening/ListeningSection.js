import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, message, Progress, Modal } from 'antd';import styled from 'styled-components';
import { setAnswer, setCurrentPart, submitAnswers } from './utils/actions';
import { listeningData } from './listeningData';
import MCQComponent from './questionType/MCQComponent';
import ShortAnswerComponent from './questionType/ShortAnswerComponent';
import FillInTheBlankComponent from './questionType/FillInTheBlankComponent';
import CategoryMatchingComponent from './questionType/CategoryMatchingComponent';
import PartNavigation from './PartNavigation';
import aud from '../assets/audio.mp3';

// ... (previous styled components remain the same)

const AudioPlayer = styled.audio`
  width: 100%;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  margin-bottom: 60px; // Add space for the footer
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
  const [audioTime, setAudioTime] = useState(0);
  const currentPart = useSelector(state => state.currentPart);
  const answers = useSelector(state => state.answers);
  const dispatch = useDispatch();

  const currentPartData = useMemo(() => {
    return listeningData.parts.find(part => 
      audioTime >= part.startTime && audioTime < part.endTime
    ) || listeningData.parts[0];
  }, [audioTime]);

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
    const audio = document.getElementById('audioPlayer');
    
    const handleTimeUpdate = () => {
      setAudioTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      message.success('You have completed the listening test!');
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    if (currentPartData.part !== currentPart) {
      dispatch(setCurrentPart(currentPartData.part));
    }
  }, [currentPartData, currentPart, dispatch]);

  const startListening = () => {
    const audio = document.getElementById('audioPlayer');
    audio.play();
    setIsPlaying(true);
  };

  const handleSetAnswer = (questionNo, answer) => {
    dispatch(setAnswer(questionNo, answer));
  };

  const handlePartChange = (partNumber) => {
    const targetPart = listeningData.parts[partNumber - 1];
    const audio = document.getElementById('audioPlayer');
    audio.currentTime = targetPart.startTime;
    setAudioTime(targetPart.startTime);
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
      <ProgressWrapper>
        <Progress 
          percent={(answeredQuestions / totalQuestions) * 100} 
          format={() => `${answeredQuestions}/${totalQuestions}`}
        />
      </ProgressWrapper>
      {currentPartData.questions.map((questionSet, index) => (
        <div key={index}>
          {renderQuestionSet(questionSet)}
        </div>
      ))}
      <PartNavigation
        parts={listeningData.parts}
        currentPart={currentPart}
        onPartChange={handlePartChange}
        onSubmit={handleSubmit}
      />
    </ContentContainer>
  );
};

export default ListeningSection;