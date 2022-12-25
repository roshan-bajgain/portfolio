import './FooterStyle.css';

import React from 'react';

import {
  FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,
} from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
          <div>
            <p>
              Arjundhara 08, Jhapa
            </p>
            <p>
              Nepal
            </p>
          </div>
        </div>
        <div className="phone">
          <h4>
            <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            +9779810088449
          </h4>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
              roshan.bazgain@gmail.com
            </h4>
          </div>
        </div>
      </div>
      <div className="right">
        <h4 className="school">About the School</h4>
        <p>
          This is me Roshan Bajgain. Technical Support Engineer
          at Microverse. I enjoy providing technical help to the
          junior Developer and guide them in their project
        </p>
        <div className="social">
          <FaFacebook size={30} style={{ marginRight: '1.5rem', color: '#fff' }} />
          <FaTwitter size={30} style={{ marginRight: '1.5rem', color: '#fff' }} />
          <FaLinkedin size={30} style={{ marginRight: '1.5rem', color: '#fff' }} />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
