import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

export default function Layout ({children}) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer />
    </>
  );
};
