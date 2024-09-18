import React from 'react';
import styled from 'styled-components';
import { Star } from 'lucide-react';

const Container = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8fafc;
`;

const Title = styled.h2`
  color: #1e3a8a;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 12px;
`;

const BookTitle = styled.h3`
  color: #1e3a8a;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const RatingValue = styled.span`
  color: #f59e0b;
  font-weight: bold;
`;

const VoteCount = styled.span`
  color: #64748b;
  font-size: 14px;
`;

const StarIcon = styled(Star)`
  color: ${props => props.filled ? '#f59e0b' : '#e2e8f0'};
`;

const RatingStars = ({ rating }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon 
          key={star} 
          size={16} 
          filled={star <= Math.floor(rating)} 
        />
      ))}
    </>
  );
};

const TestReleaseCard = ({ image, title, rating, votes }) => (
  <Card>
    <Image src={image} alt={title} />
    <Content>
      <BookTitle>{title}</BookTitle>
      <Rating>
        <RatingValue>{rating}</RatingValue>
        <RatingStars rating={rating} />
        <VoteCount>({votes} votes)</VoteCount>
      </Rating>
    </Content>
  </Card>
);

const LatestIELTSTestReleases = () => {
  const testReleases = [
    {
      image: "/api/placeholder/250/200",
      title: "IELTS Mock Test 2023 December",
      rating: 3.4,
      votes: 1522
    },
    {
      image: "/api/placeholder/250/200",
      title: "IELTS Mock Test 2023 September",
      rating: 3.3,
      votes: 698
    },
    {
      image: "/api/placeholder/250/200",
      title: "IELTS Practice Tests Volume 8",
      rating: 3.6,
      votes: 1352
    },
    {
      image: "/api/placeholder/250/200",
      title: "Prepare for IELTS General Training Volume 2",
      rating: 3.3,
      votes: 847
    }
  ];

  return (
    <Container>
      <Title>Latest IELTS test releases:</Title>
      <Grid>
        {testReleases.map((release, index) => (
          <TestReleaseCard key={index} {...release} />
        ))}
      </Grid>
    </Container>
  );
};

export default LatestIELTSTestReleases;