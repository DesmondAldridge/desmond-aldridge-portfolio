import React from 'react';
import './LilHeader.css';

const LilHeader = ({ text , img}) => {
  return (
    <div className={'lil_header'}>
      <img className='icons' src={img} alt=' ' /><p>{text}</p>
    </div>
  );
};

export default LilHeader;

