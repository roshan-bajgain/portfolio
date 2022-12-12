import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assest/me.JPG'
import HeaderSocial from './HeaderSocial';

function Header() {
  return (
    <Header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Roshan Bajgain</h1>
        <h5 className='text-light'>Full stack developer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className='me'>
          <img src={ME}></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </Header>
  )
}

export default Header;