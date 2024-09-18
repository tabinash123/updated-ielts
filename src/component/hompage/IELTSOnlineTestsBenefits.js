import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Title = styled.h2`
  color: #2c3e50;
  font-size: 24px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const BenefitItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const BenefitTitle = styled.h3`
  color: #2c3e50;
  font-size: 18px;
  margin-bottom: 10px;
`;

const BenefitDescription = styled.p`
  color: #34495e;
  font-size: 14px;
  line-height: 1.5;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #e74c3c;
  border-radius: 50%;
  margin: 20px auto;
`;

const IELTSOnlineTestsBenefits = () => {
  const benefits = [
    {
      title: "Take recent actual IELTS Tests",
      description: "Real IELTS Listening and IELTS Reading tests based on actual IELTS tests and following the Cambridge IELTS book format."
    },
    {
      title: "Community-driven",
      description: "Created by our community of IELTS teachers, previous IELTS examiners and IELTS exam takers."
    },
    {
      title: "Comprehensive analytics tool",
      description: "Our IELTS Analytics is a tool that allows you to set a target IELTS band score, analyse your progress and find how to improve."
    },
    {
      title: "View IELTS Score and Answer Explanations",
      description: "After taking our IELTS mock tests with real audio, you can check your Listening or Reading band score and view your answer sheets."
    },
    {
      title: "FREE to use",
      description: "Our online IELTS tests are always free. We are here to help users for study abroad, immigration and finding jobs."
    },
    {
      title: "Increase your IELTS band score",
      description: "Using our online tests for IELTS preparation is proven to help students improve by 0.5 - 1.5 ."
    }
  ];

  return (
    <Container>
      <Title>Why use IELTS Online Tests?</Title>
      <Grid>
        {benefits.map((benefit, index) => (
          <BenefitItem key={index}>
            <BenefitTitle>{benefit.title}</BenefitTitle>
            <BenefitDescription>{benefit.description}</BenefitDescription>
          </BenefitItem>
        ))}
      </Grid>
      <Dot />
    </Container>
  );
};

export default IELTSOnlineTestsBenefits;