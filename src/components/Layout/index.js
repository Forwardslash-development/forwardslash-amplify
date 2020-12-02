import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Header from '../Header';

import Footer from '../Footer';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Forwardslash Development</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
