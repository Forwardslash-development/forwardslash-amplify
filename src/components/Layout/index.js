import React from 'react';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
