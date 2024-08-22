import React from 'react';
import { Typography, Card, Button, Row, Col } from 'antd';
import { CheckOutlined, SendOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  background-color: #f0f2f5;
`;

const DemoCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
`;

const ProgramCard = styled(Card)`
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  ${props => props.popular && `
    background-color: #e91e63;
    color: white;
  `}
`;

const PopularBadge = styled.div`
  background-color: #e91e63;
  color: white;
  padding: 4px 8px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0 0 8px 8px;
  font-weight: bold;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  flex-grow: 1;
`;

const FeatureItem = styled.li`
  margin-bottom: 8px;
  color: ${props => props.popular ? 'white' : '#666'};
`;

const BuyButton = styled(Button)`
  background-color: ${props => props.popular ? 'white' : '#e91e63'};
  border-color: ${props => props.popular ? 'white' : '#e91e63'};
  color: ${props => props.popular ? '#e91e63' : 'white'};
  &:hover, &:focus {
    background-color: ${props => props.popular ? '#f3f3f3' : '#d81b60'};
    border-color: ${props => props.popular ? '#f3f3f3' : '#d81b60'};
    color: ${props => props.popular ? '#e91e63' : 'white'};
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: #f3e5f5;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;

  svg {
    font-size: 48px;
    color: #e91e63;
  }

  ${props => props.popular && `
    background-color: #c2185b;
    svg {
      color: white;
    }
  `}
`;

const CoachingPrograms = () => {
  return (
    <PageContainer>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>Coaching Programs</Title>
      
      <DemoCard>
        <Row align="middle" gutter={24}>
          <Col xs={24} sm={4}>
            <img src="/api/placeholder/100/100" alt="Demo Session" style={{ maxWidth: '100%' }} />
          </Col>
          <Col xs={24} sm={14}>
            <Title level={4}>Book A Free Demo Session with IELTS LMS</Title>
            <Text>This is a sample text block.</Text>
          </Col>
          <Col xs={24} sm={6}>
            <Button type="primary" size="large" style={{ backgroundColor: '#e91e63', borderColor: '#e91e63' }}>
              Book Now
            </Button>
          </Col>
        </Row>
      </DemoCard>

      <Row gutter={24}>
        <Col xs={24} md={8}>
          <ProgramCard>
            <IconWrapper>
              <SendOutlined />
            </IconWrapper>
            <Title level={3} style={{ textAlign: 'center' }}>IELTS Fast Track</Title>
            <FeatureList>
              <FeatureItem><CheckOutlined /> 5 MOCK TEST</FeatureItem>
              <FeatureItem><CheckOutlined /> INSTANT BAND SCORES</FeatureItem>
              <FeatureItem><CheckOutlined /> 6 MONTHS VALIDITY</FeatureItem>
            </FeatureList>
            <BuyButton size="large" block>Buy Now</BuyButton>
          </ProgramCard>
        </Col>
        <Col xs={24} md={8}>
          <ProgramCard popular>
            <PopularBadge>POPULAR</PopularBadge>
            <IconWrapper popular>
              <SendOutlined />
            </IconWrapper>
            <Title level={3} style={{ color: 'white', textAlign: 'center' }}>IELTS Supreme Course</Title>
            <FeatureList>
              <FeatureItem popular><CheckOutlined /> 15 MOCK TEST</FeatureItem>
              <FeatureItem popular><CheckOutlined /> Instant band Scores</FeatureItem>
              <FeatureItem popular><CheckOutlined /> 6 Months Validity</FeatureItem>
            </FeatureList>
            <BuyButton size="large" block popular>Buy Now</BuyButton>
          </ProgramCard>
        </Col>
        <Col xs={24} md={8}>
          <ProgramCard>
            <IconWrapper>
              <SendOutlined />
            </IconWrapper>
            <Title level={3} style={{ textAlign: 'center' }}>IELTS 1:1 Coaching</Title>
            <FeatureList>
              <FeatureItem><CheckOutlined /> 30 MOCK TEST</FeatureItem>
              <FeatureItem><CheckOutlined /> INSTANT BAND SCORES</FeatureItem>
              <FeatureItem><CheckOutlined /> 6 MONTHS VALIDITY</FeatureItem>
            </FeatureList>
            <BuyButton size="large" block>Buy Now</BuyButton>
          </ProgramCard>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default CoachingPrograms;