import React from 'react';
import Navbar from '../components/generics/Navbar';
import Footer from '../components/generics/Footer';

export default function Layout ({children}) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer />
    </>
  );
};
