import Head from 'next/head';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forwardslash Development</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href='https://forwardslash-development.io'>
            Forwardslash Development
          </a>
        </h1>

        <p className={styles.description}>
          Modern Application Development{' '}
          <code className={styles.code}>progressive web solutions</code>
        </p>

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
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h3>Connect &rarr;</h3>
            <p>Slack, Discord, Twitter, Github, Email, contact form..</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
}
