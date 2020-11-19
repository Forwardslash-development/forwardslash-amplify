import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <a href='/'>
        <div className={styles.logo}>
          <div className={styles.title}>
            <h1>Forwardslash Development</h1>
            <div className={styles.address}>Localhost: Chicago, IL. 60626</div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Header;
