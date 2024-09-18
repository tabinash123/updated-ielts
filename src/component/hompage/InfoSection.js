import React from 'react';
import styled from 'styled-components';
import { Globe, Plane, User, Phone } from 'lucide-react';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  max-width: 900px;
  margin: 0 auto;
`;

const Card = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  height: 220px;
`;

const BlueCard = styled(Card)`
  background-color: #000080;
  background-image: url('/api/placeholder/300/220');
`;

const RedCard = styled(Card)`
  background-color: #cc0000;
  background-image: url('/api/placeholder/300/220');
`;

const Icon = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 12px;
  margin-bottom: 15px;
  line-height: 1.3;
`;

const PhoneNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const Button = styled.button`
  background-color: #cc0000;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  margin-top: auto;
  align-self: flex-start;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
`;

const ContactName = styled.span`
  font-weight: bold;
`;

const ContactEmail = styled.span`
  opacity: 0.8;
`;

const InfoSection = () => {
  return (
    <Container>
      <BlueCard>
        <div>
          <Icon><Globe size={32} color="white" /></Icon>
          <Title>Immigration Passport Request</Title>
          <Description>Discover the power of collaboration by connecting with our team of seasoned experts.</Description>
        </div>
        <PhoneNumber>
          <Phone size={16} color="#cc0000" style={{marginRight: '5px'}} />
          +1 735 293 385
        </PhoneNumber>
      </BlueCard>
      <BlueCard>
        <div>
          <Icon><Plane size={32} color="white" /></Icon>
          <Title>Unlock Growth Opportunities</Title>
          <Description>Contact us today to explore the limitless possibilities that await your enterprise and Embark on a journey of expansion.</Description>
        </div>
        <Button>Check More</Button>
      </BlueCard>
      <RedCard>
        <div>
          <Icon><User size={32} color="white" /></Icon>
          <Title>Schedule a Consultation</Title>
        </div>
        <div>
          <ContactInfo>
            <ContactName>Emily Thompson</ContactName>
            <ContactEmail>info@mail.com</ContactEmail>
          </ContactInfo>
          <ContactInfo>
            <ContactName>Benjamin Parker</ContactName>
            <ContactEmail>contact@mail.com</ContactEmail>
          </ContactInfo>
        </div>
      </RedCard>
    </Container>
  );
};

export default InfoSection;