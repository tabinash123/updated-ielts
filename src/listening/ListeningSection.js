// ListeningSection.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Typography, Button, Radio, Space } from 'antd';
import QuestionRenderer from './QuestionRenderer';
import { listeningData } from './listeningData ';

const { Title } = Typography;

const StyledSection = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PartSelection = styled.div`
  margin-bottom: 20px;
`;

const AudioPlayer = styled.div`
  margin-bottom: 20px;
`;

const Questions = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
`;

const ListeningSection = () => {
  const [currentPart, setCurrentPart] = useState(0);

  const handlePartChange = (e) => {
    setCurrentPart(Number(e.target.value));
  };

  return (
    <StyledSection>
      <Title level={2}>IELTS Listening Test</Title>
      <PartSelection>
        <Radio.Group onChange={handlePartChange} value={currentPart}>
          <Space>
            {listeningData.parts.map((_, index) => (
              <Radio.Button key={index} value={index}>
                Part {index + 1}
              </Radio.Button>
            ))}
          </Space>
        </Radio.Group>
      </PartSelection>
      <AudioPlayer>
        <audio controls src={listeningData.audio.src}>
          Your browser does not support the audio element.
        </audio>
      </AudioPlayer>
      <Questions>
        {listeningData.parts[currentPart].questions.map((questionData, index) => (
          <QuestionRenderer key={index} questionData={questionData} />
        ))}
      </Questions>
    </StyledSection>
  );
};

export default ListeningSection;