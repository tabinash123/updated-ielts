import React from 'react';
import styled from 'styled-components';
import { Mail, MapPin, Clock, Phone, Facebook, Twitter, Youtube } from 'lucide-react';

const HeaderWrapper = styled.header`
  font-family: 'Arial', sans-serif;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
`;

const TopBar = styled.div`
  background-color: #1a1a1a;
  color: #f0f0f0;
  display: flex;
  justify-content: space-between;
  padding: 8px 50px;
  font-size: 14px;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
`;

const ContactItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff4d4d;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.a`
  color: #f0f0f0;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #ff4d4d;
    transform: translateY(-2px);
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #fff;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #1a1a1a;
  letter-spacing: 1px;
`;

const Navigation = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    gap: 30px;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 16px;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #ff4d4d;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff4d4d;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ActionArea = styled.div`
  display: flex;
  align-items: center;
  background-color: #ff4d4d;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ReserveButton = styled.button`
  background-color: #0000cd;
  color: #fff;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  margin-right: 20px;
  border-radius: 3px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #4d4dff;
    transform: translateY(-2px);
  }
`;

const CallInfo = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const PhoneIcon = styled.div`
  background-color: #0000cd;
  border-radius: 50%;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneNumber = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const Header = () => {
  const handleReserve = () => {
    alert('Reservation system coming soon!');
  };

  const handleCall = () => {
    window.location.href = 'tel:+123358736';
  };

  return (
    <HeaderWrapper>
      <TopBar>
        <ContactInfo>
          <ContactItem>
            <Mail size={16} />
            info@mail.com
          </ContactItem>
          <ContactItem>
            <MapPin size={16} />
            234 Main Road, NY
          </ContactItem>
          <ContactItem>
            <Clock size={16} />
            Mon- Fry 09 - 18
          </ContactItem>
        </ContactInfo>
        <SocialIcons>
          <SocialIcon href="https://facebook.com" target="_blank"><Facebook size={18} /></SocialIcon>
          <SocialIcon href="https://twitter.com" target="_blank"><Twitter size={18} /></SocialIcon>
          <SocialIcon href="https://youtube.com" target="_blank"><Youtube size={18} /></SocialIcon>
        </SocialIcons>
      </TopBar>
      <MainHeader>
        <Logo>VISALY</Logo>
        <Navigation>
          <ul>
            <li><NavLink href="#" style={{ color: '#ff4d4d' }}>Home</NavLink></li>
            <li><NavLink href="#">About</NavLink></li>
            <li><NavLink href="#">Pages</NavLink></li>
            <li><NavLink href="#">Prices</NavLink></li>
            <li><NavLink href="#">Blog</NavLink></li>
            <li><NavLink href="#">Contact</NavLink></li>
          </ul>
        </Navigation>
        <ActionArea>
          <ReserveButton onClick={handleReserve}>Reserve</ReserveButton>
          <CallInfo onClick={handleCall}>
            <PhoneIcon>
              <Phone size={22} color="#fff" />
            </PhoneIcon>
            <div>
              Call Us
              <PhoneNumber>+1 233 587 36</PhoneNumber>
            </div>
          </CallInfo>
        </ActionArea>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;