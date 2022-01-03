import Footer from '../../components/layout/Footer'
import Header from '../../components/layout/Header'
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout;

// TO DOS
// import header and footer components
// create layout component that takes in a child object
// and returns div/header/main(children)/footer