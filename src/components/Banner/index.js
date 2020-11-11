import React from 'react';
import styled from '@emotion/styled';
import styles from './Banner.module.css';

const BannerRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-image: url('/images/cover.jpeg');
`;

const Cover = styled('div')`
  width: 99.5vw;
  background-color: #000066;
`;

function Banner() {
  return (
    <BannerRoot>
      <Cover alt='forwardslash-development.io' />
      <h2 className={styles.subtitle}>
        Modern Application Development{' '}
        <code className={styles.code}>progressive web solutions</code>
      </h2>
    </BannerRoot>
  );
}

export default Banner;
