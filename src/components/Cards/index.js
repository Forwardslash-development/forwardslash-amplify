import React from 'react';
import styled from '@emotion/styled';
import styles from './Cards.module.css';

const CardRoot = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Cards() {
  return (
    <CardRoot>
      <div className={styles.grid}>
        <a href='/' className={styles.aboutcard}>
          <div className={styles.top}></div>
          <div className={styles.caption}></div>
          <div className={styles.middle}>
            <h3 className={styles.title}>About &rarr;</h3>
            <p>About Forwardslash Development, history, work, ethics, goals.</p>
          </div>
          <div className={styles.bottom}></div>
        </a>

        <a href='/' className={styles.servicescard}>
          <div className={styles.top}></div>
          <div className={styles.caption}></div>
          <div className={styles.middle}>
            <h3 className={styles.title}>Services &rarr;</h3>
            <p>Progressive web application and API development services.</p>
          </div>
          <div className={styles.bottom}></div>
        </a>
        <a
          href='https://github.com/vercel/next.js/tree/master/examples'
          className={styles.blogcard}
        >
          <div className={styles.top}></div>
          <div className={styles.caption}></div>
          <div className={styles.middle}>
            <h3 className={styles.title}>Blog &rarr;</h3>
            <p>Our development blog. The place where we write, when we write</p>
          </div>
          <div className={styles.bottom}></div>
        </a>

        <a href='/' className={styles.connectcard}>
          <div className={styles.top}></div>
          <div className={styles.caption}></div>
          <div className={styles.middle}></div>
          <h3 className={styles.title}>Connect &rarr;</h3>
          <p>Slack, Discord, Twitter, Github, Email, contact form..</p>
          <div className={styles.bottom}></div>
        </a>
      </div>
    </CardRoot>
  );
}

export default Cards;
