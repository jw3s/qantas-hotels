import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/qantas-logo.png';

const Wrapper = styled.header`
  padding: 20px;
  max-width: 1072px;
  margin: auto;
  margin-bottom: 40px;
`;

const Image = styled.img`
  width: 20%;
  min-width: 250px;
`;

const Header = () => (
  <Wrapper>
    <Image src={logo} alt="logo" width="20%" />
  </Wrapper>
);

export default Header;
