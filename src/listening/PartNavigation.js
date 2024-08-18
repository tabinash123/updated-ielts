import React from 'react';
import styled from 'styled-components';

const FooterNav = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f0f2f5;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  z-index: 1000;
  height: 60px;
`;

const PartOptionsContainer = styled.div`
  display: flex;
  width: 85%;
  height: 100%;
`;

const PartOption = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.isActive ? '#1890ff' : '#fff'};
  color: ${props => props.isActive ? '#fff' : '#000'};
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  border-right: 1px solid #d9d9d9;

  &:hover {
    background-color: ${props => props.isActive ? '#40a9ff' : '#f5f5f5'};
  }

  &:last-child {
    border-right: none;
  }
`;

const SubmitButtonContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #52c41a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: #73d13d;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(82, 196, 26, 0.2);
  }
`;

const PartNavigation = ({ parts, currentPart, onPartChange, onSubmit }) => {
  return (
    <FooterNav>
      <PartOptionsContainer>
        {parts.map((part, index) => (
          <PartOption
            key={index}
            onClick={() => onPartChange(index + 1)}
            isActive={currentPart === index + 1}
          >
            Part {index + 1}
          </PartOption>
        ))}
      </PartOptionsContainer>
      <SubmitButtonContainer>
        <SubmitButton onClick={onSubmit}>
          Submit Test
        </SubmitButton>
      </SubmitButtonContainer>
    </FooterNav>
  );
};

export default PartNavigation;