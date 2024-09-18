import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { ChevronRight, ChevronDown, Info, ArrowRight } from 'lucide-react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const IntroSection = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Arial, sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackgroundContainer = styled.div`
  width: 500px;
  height: 400px;
  background-color: #1a365d;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 30px;
  transition: all 0.3s ease;
  overflow: hidden;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const OverlayContent = styled.div`
  color: white;
  z-index: 2;
`;

const OverlayTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 10px;
  animation: ${slideIn} 0.5s ease-out;
`;

const OverlaySubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.9;
  animation: ${slideIn} 0.5s ease-out 0.2s both;
`;

const ContentContainer = styled.div`
  flex: 1;
  padding-left: 50px;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 30px;
  }
`;

const SubHeading = styled.h3`
  color: #0047AB;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

const MainHeading = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #555;
`;

const ExpandableItem = styled.div`
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 15px;
`;

const ItemContent = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: #555;
  display: ${props => props.isOpen ? 'block' : 'none'};
  animation: ${fadeIn} 0.3s ease-out;
`;

const MoreInfoButton = styled.button`
  background-color: #E52222;
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: #C41E1E;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

const ToolTip = styled.div`
  position: absolute;
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const InfoIcon = styled(Info)`
  cursor: pointer;
  position: relative;
  &:hover ${ToolTip} {
    opacity: 1;
  }
`;

const ImmigrationPartnerIntro = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleItem = (item) => {
    setExpandedItems(prev => ({...prev, [item]: !prev[item]}));
  };

  const handleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
    // Here you could implement more complex logic, like opening a modal or navigating to a new page
    alert("More information functionality would be implemented here.");
  };

  return (
    <IntroSection>
      <BackgroundContainer>
        <OverlayContent>
          <OverlayTitle>Driven by Vision</OverlayTitle>
          <OverlaySubtitle>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</OverlaySubtitle>
        </OverlayContent>
      </BackgroundContainer>
      <ContentContainer>
        <SubHeading>SERVICE IN EVERY DETAIL</SubHeading>
        <MainHeading>Trusted Immigration Partner</MainHeading>
        <Paragraph>
          Embark on a journey with us that began with a vision. Our relentless pursuit of excellence has transformed this vision into a reality, shaping our business to not only meet but exceed your expectations.
        </Paragraph>
        <Paragraph>
          Integrity, innovation, and a customer-centric approach are the cornerstones of our identity. We believe in doing business with transparency, accountability, and a constant drive for improvement. Beyond products and services, we are in the business of building connections. Whether you're a valued client, a potential partner, or a member of our community.
        </Paragraph>
        
     
      </ContentContainer>
    </IntroSection>
  );
};

export default ImmigrationPartnerIntro;