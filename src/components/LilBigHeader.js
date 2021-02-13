import React from 'react';
import './LilBigHeader.css';

const LilBigHeader = ({ text}) => {
  return (
    <div className={'lil_big_header'}>
      <p>{text}</p>
    </div>
  );
};

export default LilBigHeader;
