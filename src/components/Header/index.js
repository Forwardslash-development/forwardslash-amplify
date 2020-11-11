import React from 'react';
import styled from '@emotion/styled';

const HeaderRoot = styled(`header`)`
  left: 0;
  top: 0;
  height: 80px;
  width: 100vw;
  position: sticky;
  z-index: 1000;
`;

const HeaderContainer = styled('div')`
  background-color: #000066;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
  color: #6ccff6;
`;

const NavRoot = styled('nav')`
  display: flex;
  align-items: left;
  width: 99vw;
`;

const Logo = styled('img')`
  width: 100vwh;
  height: 100vwh;
  padding: 1em;
`;

const Title = styled('h1')`
  font-size: 42px;
  display: inline-flex;
  margin: 0px;
`;

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <a href='/'>
          <Logo src='/images/42xlogo.png' alt='forwardslash-development.io' />
          <Title>{'Forwardslash Development'}</Title>
        </a>
        <NavRoot></NavRoot>
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default Header;
