import Head from 'next/head';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Cards from '../src/components/Cards';
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
      <Cards />
      <main className={styles.main}></main>

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
