import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <a href='/' alt='powered by forwardslash development'>
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
