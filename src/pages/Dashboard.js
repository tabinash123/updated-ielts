import React from 'react';
import styled from 'styled-components';
import { 
  Card, 
  Progress, 
  List, 
  Button, 
  Typography, 
  Space,
  Row,
  Col,
  Tag,
  Statistic,
  Timeline
} from 'antd';
import { 
  BookOutlined, 
  EditOutlined, 
  AudioOutlined, 
  MessageOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  RiseOutlined,
  WarningOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const DashboardContainer = styled.div`
  padding: 24px;
  background-color: #f0f2f5;
  min-height: 100vh;
`;

const StyledCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const ProgressCard = styled(StyledCard)`
  .ant-card-head-title {
    font-size: 18px;
  }
`;

const SkillProgress = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SkillIcon = styled.span`
  font-size: 24px;
  margin-right: 16px;
  color: #1890ff;
`;

const StyledTag = styled(Tag)`
  margin-bottom: 8px;
`;

const mockStudentData = {
  name: "John Doe",
  targetScore: 7.5,
  testDate: "2024-10-15",
  recentActivities: [
    { activity: "Completed Reading Practice Test 5", date: "2024-08-20", score: 7.0 },
    { activity: "Submitted Writing Task 2 Essay", date: "2024-08-18", score: 6.5 },
    { activity: "Attended Speaking Mock Test", date: "2024-08-15", score: 7.0 },
    { activity: "Completed Listening Section 3 & 4", date: "2024-08-12", score: 7.5 },
  ],
  skillProgress: {
    reading: 75,
    writing: 60,
    listening: 80,
    speaking: 70,
  },
  weakAreas: ["Writing Task 2", "Reading True/False/Not Given", "Speaking Part 2"],
  strengths: ["Listening Section 1 & 2", "Reading Matching Headings", "Speaking Part 1"],
};

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title level={2}>Welcome back, {mockStudentData.name}!</Title>
      <Row gutter={24}>
        <Col span={16}>
          <ProgressCard title="Your IELTS Preparation Progress">
            <SkillProgress>
              <SkillIcon><BookOutlined /></SkillIcon>
              <Progress  percent={mockStudentData.skillProgress.reading} format={percent => `Reading ${percent}%`} />
            </SkillProgress>
            <SkillProgress>
              <SkillIcon><EditOutlined /></SkillIcon>
              <Progress percent={mockStudentData.skillProgress.writing} format={percent => `Writing ${percent}%`} />
            </SkillProgress>
            <SkillProgress>
              <SkillIcon><AudioOutlined /></SkillIcon>
              <Progress percent={mockStudentData.skillProgress.listening} format={percent => `Listening ${percent}%`} />
            </SkillProgress>
        
          </ProgressCard>
{/*           
          <StyledCard title="Recent Activities">
            <Timeline>
              {mockStudentData.recentActivities.map((activity, index) => (
                <Timeline.Item key={index} color={activity.score >= 7.0 ? "green" : "blue"}>
                  <p>{activity.activity}</p>
                  <p><Text type="secondary">{activity.date}</Text></p>
                  <Tag color={activity.score >= 7.0 ? "success" : "processing"}>Score: {activity.score}</Tag>
                </Timeline.Item>
              ))}
            </Timeline>
          </StyledCard>
        </Col>
        
        <Col span={8}>
          <StyledCard>
            <Statistic
              title="Days Until Your IELTS Test"
              value={Math.ceil((new Date(mockStudentData.testDate) - new Date()) / (1000 * 60 * 60 * 24))}
              suffix="days"
              prefix={<ClockCircleOutlined />}
            />
            <Paragraph>Test Date: {mockStudentData.testDate}</Paragraph>
            <Paragraph>
              <Text strong>Target Score: </Text>
              <Tag color="blue">{mockStudentData.targetScore}</Tag>
            </Paragraph>
            <Button type="primary" icon={<RiseOutlined />} block>
              Update Study Plan
            </Button>
          </StyledCard>
          
          <StyledCard title="Areas for Improvement">
            {mockStudentData.weakAreas.map((area, index) => (
              <StyledTag key={index} color="warning" icon={<WarningOutlined />}>{area}</StyledTag>
            ))}
            <Button type="primary" icon={<BookOutlined />} block style={{ marginTop: '16px' }}>
              Practice Weak Areas
            </Button>
          </StyledCard>
          
          <StyledCard title="Your Strengths">
            {mockStudentData.strengths.map((strength, index) => (
              <StyledTag key={index} color="success" icon={<TrophyOutlined />}>{strength}</StyledTag>
            ))}
          </StyledCard>
          
          <StyledCard title="Recommended Next Steps">
            <List
              size="small"
              dataSource={[
                "Complete Writing Task 2 practice essay",
                "Review Reading True/False/Not Given strategies",
                "Practice Speaking Part 2 with a tutor",
                "Take a full Listening practice test"
              ]}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </StyledCard> */}
        </Col>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;