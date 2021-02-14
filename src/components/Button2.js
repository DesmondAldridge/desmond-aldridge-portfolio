import React from 'react';
import './Button2.css';

const Button = ({ text, link }) => {
  return (
    <div className={'button2'}>
      <a href={link} target="_blank" rel="noreferrer noopener">{text}</a>
    </div>
  );
};

export default Button;
