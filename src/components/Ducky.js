import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import './Ducky.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Ducky = ({
  title,
  img,
  desc,
  backgroundImg,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
}) => {
  return (
    <div
      className='ducky'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='ducky_container'>
      <img className='ducky_img' src={img} alt=' '/>
        <div className='ducky_text'>
        
          <p>{title}</p>
          <div className='ducky_textDesc'>
            <p>{desc}</p>
            </div>
            <div className='ducky_buttons'>
            <Button text={leftBtnTxt} link={leftBtnLink} />
            <Button text={rightBtnTxt} link={rightBtnLink} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ducky;
