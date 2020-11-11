import Head from 'next/head';
import Header from '../src/components/Header';
import Banner from '../src/components/Banner';
import Cards from '../src/components/Cards';
import Footer from '../src/components/Footer';

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
        <Cards />
      </main>
      <Footer />
    </div>
  );
}
