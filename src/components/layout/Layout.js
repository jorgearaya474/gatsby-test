import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div className='site-layout'>
      <Header />
      <main>{props.children}</main>
      <Footer focusEmailField={props.focusEmailField} />
    </div>
  );
};

export default Layout;
