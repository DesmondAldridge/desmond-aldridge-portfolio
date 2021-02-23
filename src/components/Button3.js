import React from 'react';
import './Button3.css';

const Button = ({ text, link }) => {
  return (
    <div className={'button3'}>
      <a href={link} target="_blank" rel="noreferrer noopener">{text}</a>
    </div>
  );
};

export default Button;
