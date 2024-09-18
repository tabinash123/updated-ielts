import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f8f8;
`;

const ServicesGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 220px;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.4;
`;

const CustomIcon = ({ children }) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <CustomIcon>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7" y1="8" x2="17" y2="8" />
          <line x1="7" y1="12" x2="17" y2="12" />
          <line x1="7" y1="16" x2="12" y2="16" />
        </CustomIcon>
      ),
      title: "Visa release",
      description: "Ensuring adherence to standards"
    },
    {
      icon: (
        <CustomIcon>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
          <line x1="12" y1="2" x2="12" y2="4" />
        </CustomIcon>
      ),
      title: "Embassy Support",
      description: "Crafting and implementing strategies"
    },
    {
      icon: (
        <CustomIcon>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </CustomIcon>
      ),
      title: "Passport Issuance",
      description: "Streamlined solutions for efficient"
    },
    {
      icon: (
        <CustomIcon>
          <path d="M20 7v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7" />
          <rect x="8" y="2" width="8" height="5" rx="1" />
          <line x1="12" y1="17" x2="12" y2="17" />
          <line x1="12" y1="11" x2="12" y2="14" />
        </CustomIcon>
      ),
      title: "Legal Assistance",
      description: "Promoting a secure and healthy work"
    }
  ];

  return (
    <Container>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <IconWrapper>{service.icon}</IconWrapper>
            <Title>{service.title}</Title>
            <Description>{service.description}</Description>
          </ServiceItem>
        ))}
      </ServicesGrid>
    </Container>
  );
};

export default ServicesSection;