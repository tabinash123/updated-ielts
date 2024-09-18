import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: -100px;
  right: -100px;
  width: 400px;
  height: 400px;
  background-color: #f0f0f0;
  transform: rotate(45deg);
  z-index: -1;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 10px 0 0;
  max-width: 600px;
`;

const ViewAllButton = styled.button`
  background-color: #e63946;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
`;

const PostsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const MainPost = styled.div`
  grid-column: 1;
  grid-row: 1 / span 3;
`;

const MainPostImage = styled.div`
  width: 100%;
  height: 250px;
  background-color: #3498db;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0 0 8px;
`;

const PostDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 10px;
`;

const ReadMoreLink = styled.a`
  color: #e63946;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
`;

const SidePost = styled.div`
  display: flex;
  gap: 15px;
`;

const SidePostImage = styled.div`
  width: 100px;
  height: 70px;
  background-color: ${props => props.color};
  border-radius: 8px;
`;

const SidePostContent = styled.div`
  flex: 1;
`;

const LatestPosts = () => {
  return (
    <Section>
      <BackgroundShape />
      <Header>
        <div>
          <Title>Latest Posts</Title>
          <Subtitle>Exploring topics, sharing perspectives, and igniting conversations in a journey through ideas</Subtitle>
        </div>
        <ViewAllButton>View All</ViewAllButton>
      </Header>
      <PostsContainer>
        <MainPost>
          <MainPostImage />
          <PostTitle>Study Abroad</PostTitle>
          <PostDescription>Expand your business horizons seamlessly. Let us handle the intricacies of visa</PostDescription>
          <ReadMoreLink href="#">Read More</ReadMoreLink>
        </MainPost>
        <SidePost>
          <SidePostImage color="#e74c3c" />
          <SidePostContent>
            <PostTitle>Tourist Visa</PostTitle>
            <PostDescription>Unlock doors to endless possibilities with our seamless visa solutions. Your journey begins here</PostDescription>
            <ReadMoreLink href="#">Read More</ReadMoreLink>
          </SidePostContent>
        </SidePost>
        <SidePost>
          <SidePostImage color="#2ecc71" />
          <SidePostContent>
            <PostTitle>Fast Stamp</PostTitle>
            <PostDescription>Dive into the world of education abroad effortlessly. Let us guide you through a stress-free</PostDescription>
            <ReadMoreLink href="#">Read More</ReadMoreLink>
          </SidePostContent>
        </SidePost>
        <SidePost>
          <SidePostImage color="#f39c12" />
          <SidePostContent>
            <PostTitle>Visa Solutions</PostTitle>
            <PostDescription>Explore career horizons globally. Trust us to pave the way for your smooth work visa process</PostDescription>
            <ReadMoreLink href="#">Read More</ReadMoreLink>
          </SidePostContent>
        </SidePost>
      </PostsContainer>
    </Section>
  );
};

export default LatestPosts;