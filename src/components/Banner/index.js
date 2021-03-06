import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import styles from './Banner.module.css';

function Banner(props) {
  return (
    <div className={styles.hero}>
      <div className={styles.headline}>
        <h2 className={styles.subtitle}>Modern Application Development</h2>
        <code className={styles.code}>progressive web solutions </code>
      </div>
    </div>
  );
}

export default Banner;
