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
        <a href='https://nextjs.org/docs' className={styles.card}>
          <h3>About &rarr;</h3>
          <p>About Forwardslash Development, history, work, ethics, goals.</p>
        </a>

        <a href='https://nextjs.org/learn' className={styles.card}>
          <h3>Services &rarr;</h3>
          <p>Progressive web application and API development services.</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/master/examples'
          className={styles.card}
        >
          <h3>Blog &rarr;</h3>
          <p>The place where we write, when we write</p>
        </a>

        <a
          href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
        >
          <h3>Connect &rarr;</h3>
          <p>Slack, Discord, Twitter, Github, Email, contact form..</p>
        </a>
      </div>
    </CardRoot>
  );
}

export default Cards;
