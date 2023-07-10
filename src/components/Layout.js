import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main className="main-content">{children}</main>
      <footer className="footer">
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;
