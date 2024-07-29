// App.js
import React from 'react';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';
import ListeningSection from './listening/ListeningSection';

const { Content } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`;

const StyledContent = styled(Content)`
  padding: 50px;
`;

const App = () => {
  return (
    <StyledLayout>
      <StyledContent>
        <Title>IELTS Practice Test</Title>
        <ListeningSection />
        {/* You can add other sections (Reading, Writing, Speaking) here */}
      </StyledContent>
    </StyledLayout>
  );
};

export default App;