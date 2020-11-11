import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <img
          src='/logo.svg'
          alt='forwardslash-development.io Logo'
          className={styles.logo}
        />
      </a>
    </div>
  );
}

export default Footer;
