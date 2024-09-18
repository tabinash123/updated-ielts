import React from 'react';
import styled from 'styled-components';
import { Star, Eye, Tag } from 'lucide-react';

const TipsSection = styled.section`
  background-color: #1e3a5f;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const TipsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const TipCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TipHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const TipIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 5px;
`;

const TipTitle = styled.h3`
  color: #1e3a5f;
  font-size: 18px;
  margin: 0;
  flex: 1;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #ffa500;
  font-size: 14px;
  margin-top: 5px;
`;

const TipContent = styled.p`
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
  flex-grow: 1;
`;

const TipMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 12px;
`;

const TagWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const ViewCount = styled.span`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  align-self: center;
`;

const IELTSTips = () => {
  const tips = [
    {
      icon: "/api/placeholder/40/40",
      title: "5 Penalty Areas for Indian Students in IELTS Listening",
      rating: 3.5,
      votes: 302,
      content: "Since Indian students are writing and speaking in English with Indian accent, with not much exposure to foreign accent, it can be the cause of s...",
      tag: "Listening Tips",
      views: 81611
    },
    {
      icon: "/api/placeholder/40/40",
      title: "110 IELTS Words, IELTS Vocabulary List",
      rating: 3.3,
      votes: 913,
      content: "1.analogy 2.analysis 3.analyze 4.annotate 5.anticipate 6.application 7.apply 8.approach 9.associate 10.assume 11.assumpt...",
      tag: "Reading Tips",
      views: 186639
    },
    {
      icon: "/api/placeholder/40/40",
      title: "Common Spelling Errors and How to Avoid Them",
      rating: 3.3,
      votes: 249,
      content: "Many students often make mistakes in writing some words incorrectly as they are ambiguous about their spellings. Committing spelling errors can...",
      tag: "Writing Tips",
      views: 74830
    },
    {
      icon: "/api/placeholder/40/40",
      title: "How To Improve Your Pronunciation",
      rating: 3.5,
      votes: 336,
      content: "Below we share with you ten tips that will help improve your pronunciations 1. Decide on the option of English English has different ways of pro...",
      tag: "Speaking tips",
      views: 47811
    }
  ];

  return (
    <TipsSection>
      <Title>IELTS tip of the day</Title>
      <TipsGrid>
        {tips.map((tip, index) => (
          <TipCard key={index}>
            <TipHeader>
              <TipIcon src={tip.icon} alt={tip.title} />
              <div>
                <TipTitle>{tip.title}</TipTitle>
                <Rating>
                  {tip.rating.toFixed(1)} {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(tip.rating) ? "#ffa500" : "none"} color="#ffa500" />
                  ))} ({tip.votes} votes)
                </Rating>
              </div>
            </TipHeader>
            <TipContent>{tip.content}</TipContent>
            <TipMeta>
              <TagWrapper><Tag size={14} /> {tip.tag}</TagWrapper>
              <ViewCount><Eye size={14} /> {tip.views.toLocaleString()}</ViewCount>
            </TipMeta>
          </TipCard>
        ))}
      </TipsGrid>
      <Button>See more</Button>
    </TipsSection>
  );
};

export default IELTSTips;