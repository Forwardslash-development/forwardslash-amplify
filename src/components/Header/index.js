import React from 'react';
import styled from '@emotion/styled';

const HeaderRoot = styled(`header`)`
  left: 0;
  top: 0;
  width: 100vw;
  position: sticky;
  z-index: 1000;
`;

const HeaderContainer = styled('div')`
  background-color: #000066;
  color: #6ccff6;
  height: 120px;
`;

const Logo = styled('div')`
  display: inline-block;
  float: left;
  margin: 1em;
  background-image: url('/images/logo.png');
  background-repeat: no-repeat;
  background-size: 72px 72px;
  width: 74px;
  height: 74px;
`;

const Title = styled('div')`
  display: inline-block;
  width: 30vw;
  line-height: 1;
  margin-top: -3px;
`;
const Address = styled('div')`
  margin-top: -12px;
`;

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContainer>
        <a href='/'>
          <Logo alt='forwardslash-development.io' />
          <Title>
            <h1>Forwardslash Development</h1>
          </Title>
        </a>
        <Address>Localhost: Chicago, IL. 60626</Address>
      </HeaderContainer>
    </HeaderRoot>
  );
}

export default Header;
