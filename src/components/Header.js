import React from 'react';
import './Header.css';
import DesLogo from '../assets/images/des-logo.png';
import styled from 'styled-components';
import Typing from './Typing';

const Header = () => {
  return (
    <div className='header'>
      {/* <div className='header_logo'> */}
        <img src={DesLogo} alt='Des Logo' />
        <span>DESMOND ALDRIDGE</span>
      {/* </div> */}

      <div className='header_center'>
      <div className='move_box'><Typing /></div>
        
      </div>

      <div className='header_right'>
        <a className="btn" href="https://github.com/DesmondAldridge" target="_blank" rel="noreferrer noopener">GITHUB</a>
        <a className="btn" href="https://www.linkedin.com/in/desmond-aldridge" target="_blank" rel="noreferrer noopener">LINKEDIN</a>
        <a className="btn" href="https://docs.google.com/document/d/11TvrK4z_wtDYSFcEqTLWdhMPWq4hBTMbe75uTrqaekM/edit?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a>
      </div>
    </div>
  );
};


export default Header;
