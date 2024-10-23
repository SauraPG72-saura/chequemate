import React from 'react';
import './header.css';
import einvoiceimg from '../assets/header.png';

const Header = () => {
  return (
    <div className="header">
      <div className='container'>
        <div className='header-contents'>
          <h2>The Future of Invoicing</h2>
          <p>Explore new ways to invoice and connect with businesses under the government PEPPOL</p>
          <button>Sign Up Now</button>
        </div>
        <div className='image-container'>
          <img src={einvoiceimg} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default Header;
