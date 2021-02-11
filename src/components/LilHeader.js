import React from 'react';
import './LilHeader.css';

const LilHeader = ({ text}) => {
  return (
    <div className={'lil_header'}>
      <p>{text}</p>
    </div>
  );
};

export default LilHeader;
