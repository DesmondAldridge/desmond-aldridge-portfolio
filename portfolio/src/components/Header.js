import React from 'react';
import './Header.css';
import DesLogo from '../assets/images/DesLogo.png';
import styled from 'styled-components';
import Typing from './Typing';

const Header = () => {
  return (
    <div className='header'>
      <div className='header_logo'>
        <img src={DesLogo} alt='Des Logo' />
      </div>

      <div className='header_center'>
      <div className='move_box'><Typing /></div>
        
      </div>

      <div className='header_right'>
        <p>GitHub</p>
        <p>Email</p>
      </div>
    </div>
  );
};

export default Header;
