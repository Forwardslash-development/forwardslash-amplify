import React from 'react';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import Meta from '../Meta';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
