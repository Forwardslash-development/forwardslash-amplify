import React from 'react';
import LazyHero from '../LazyHero';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import styles from './Banner.module.css';

const HeroBox = styled('div')`
  display: block;
  padding: 3rem;
  background: rgb(0, 0, 102, 0.4);
  border-radius: 1rem;
  border: 0.1rem solid #000066;
  z-index: -1;
`;

function Banner(props) {
  return (
    <LazyHero
      imageSrc='./images/cover.jpeg'
      className={styles.hero}
      opacity={0}
    >
      <HeroBox>
        <h2 className={styles.subtitle}>Modern Application Development</h2>
        <code className={styles.code}>progressive web solutions </code>
      </HeroBox>
    </LazyHero>
  );
}

export default Banner;
