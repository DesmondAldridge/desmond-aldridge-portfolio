import React from 'react';
import './LilHeader.css';

const LilHeader = ({ text , img}) => {
  return (
    <div className={'lil_header'}>
      <p>{text}</p><img className='icons' src={img} alt=' ' />
    </div>
  );
};

export default LilHeader;

