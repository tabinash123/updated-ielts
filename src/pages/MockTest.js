import React from 'react';
import styled from 'styled-components';
import {  FileTextOutlined, EditOutlined, AudioOutlined, LockOutlined, AppstoreOutlined, PlayCircleOutlined } from '@ant-design/icons';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const MockTestContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  margin-bottom: 20px;
  position: relative;
`;

const MockTestTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
`;

const NewLabel = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: bold;
  transform: rotate(45deg) translateX(25%) translateY(-50%);
`;

const TestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 15px;
`;

const TestItem = styled.div`
  text-align: center;
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
`;

const TestIcon = styled.div`
  font-size: 24px;
  color: ${props => props.color};
  margin-bottom: 5px;
`;

const TestName = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const TestProgress = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const TestButton = styled.button`
  background-color: ${props => props.color};
  color: white;
  border: none;
  padding: 8px 0;
  border-radius: 5px;
  cursor: ${props => props.locked ? 'not-allowed' : 'pointer'};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  opacity: ${props => props.locked ? 0.6 : 1};
`;

const FullTestButton = styled.button`
  background-color: #f8f9fa;
  border: none;
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  background-color: #e9ecef;
  height: 8px;
  border-radius: 4px;
  width: 50%;
`;

const testSections = [
  { name: 'Listening', icon: <FileTextOutlined />, color: '#20b2aa' },
  { name: 'Reading', icon: <FileTextOutlined />, color: '#2e8b57' },
  { name: 'Writing', icon: <EditOutlined />, color: '#d2691e' },
];

const mockTests = [
  { id: 1, title: 'Mock Test 1', isNew: true, isLocked: false },
  { id: 2, title: 'Mock Test 2', isNew: false, isLocked: true },
  { id: 3, title: 'Mock Test 3', isNew: false, isLocked: true },
  { id: 4, title: 'Mock Test 4', isNew: false, isLocked: true },
  // Add more mock tests as needed
];

const MockTest = ({ test }) => (
  <MockTestContainer>
    <MockTestTitle>{test.title}</MockTestTitle>
    {test.isNew && <NewLabel>NEW</NewLabel>}
    <TestGrid>
      {testSections.map((section, index) => (
        <TestItem key={index}>
          <TestIcon color={section.color}>{section.icon}</TestIcon>
          <TestName>{section.name}</TestName>
          <TestProgress>0%</TestProgress>
          <TestButton color={section.color} locked={test.isLocked}>
            {test.isLocked ? <><LockOutlined /> Locked</> : 'Take Test'}
          </TestButton>
        </TestItem>
      ))}
    </TestGrid>
    <FullTestButton>
      <span><AppstoreOutlined /> Full Test</span>
      <ProgressBar />
      <span><PlayCircleOutlined /> Start</span>
    </FullTestButton>
  </MockTestContainer>
);

const IELTSExamLibrary = () => {
  return (
    <Container>
      <Title>Mock Tests</Title>
      {mockTests.map(test => (
        <MockTest key={test.id} test={test} />
      ))}
    </Container>
  );
};

export default IELTSExamLibrary;