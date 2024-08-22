import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { BookOutlined, FileTextOutlined, AudioOutlined, VideoCameraOutlined } from '@ant-design/icons';

const modules = [
  {
    id: 'reading',
    title: 'Reading Module',
    description: 'Sharpen your reading skills with comprehensive IELTS reading tests.',
    icon: <BookOutlined />,
  },
  {
    id: 'writing',
    title: 'Writing Module',
    description: 'Boost your writing prowess with practice writing tasks.',
    icon: <FileTextOutlined />,
  },
  {
    id: 'listening',
    title: 'Listening Module',
    description: 'Enhance your listening ability with engaging IELTS audio tests.',
    icon: <AudioOutlined />,
  },

];

const ModulePage = () => {
  return (
    <PageContainer>
      <Title>IELTS Preparation Modules</Title>
      <ModuleContainer>
        {modules.map((module) => (
          <StyledLink key={module.id} to={`/${module.id}`}>
            <StyledCard>
              <IconWrapper>{module.icon}</IconWrapper>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </StyledCard>
          </StyledLink>
        ))}
      </ModuleContainer>
    </PageContainer>
  );
};

// Styled Components
const PageContainer = styled.div`
  padding: 40px;
  background: linear-gradient(135deg, #f6f8fa 0%, #e9ecef 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
  color: #333;
  text-align: center;
`;

const ModuleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const StyledCard = styled(Card)`
  width: 280px;
  border-radius: 16px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  color: #1890ff;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  color: #333333;
  font-weight: 600;
`;

const CardDescription = styled.p`
  font-size: 16px;
  color: #666666;
  line-height: 1.5;
  padding: 0 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default ModulePage;
