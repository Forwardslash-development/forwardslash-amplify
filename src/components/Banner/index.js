import React from 'react';
import styled from '@emotion/styled';

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
`;

const Title = styled('h1')`
  font-size: 45px;
`;

const SubTitle = styled('h2')`
  font-size: 20px;
  margin: 0;
  font-weight: 300;
`;

const Cover = styled('img')`
  width: 100vw;
`;

function Banner() {
  return (
    <BannerRoot>
      <Cover src='/images/cover.jpeg' alt='forwardslash-development.io' />
    </BannerRoot>
  );
}

export default Banner;
