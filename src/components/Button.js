import React from 'react';
import './Button.css';

const Button = ({ text, link }) => {
  return (
    <div className={'button'}>
      <a href={link} target="_blank" rel="noreferrer noopener">{text}</a>
    </div>
  );
};

export default Button;
