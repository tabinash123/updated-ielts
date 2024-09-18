import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  height: 400px;
  background-image: url('/api/placeholder/1600/400');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(220, 53, 69, 0.7); // Red overlay with opacity
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin-left: 50%;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px 25px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
`;

const ImmigrationHero = () => {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <Title>Crafting Real Solutions for Immigration Needs</Title>
        <Subtitle>
          Empowering your dreams, one step at a time. Experience excellence with us, where
          innovation meets customer satisfaction with custom solutions for you.
        </Subtitle>
        <Button>Start Now</Button>
      </Content>
    </HeroSection>
  );
};

export default ImmigrationHero;