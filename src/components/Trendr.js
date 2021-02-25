import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import './Trendr.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Trendr = ({
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
      className='trendr'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='trendr_container'>
        <img className='trendr_img' src={img} alt=' ' />
      </div>
      <div className='trendr_text'>
        <div className='trendr_title'>
          <p>{title}</p>
        </div>
        <div className='trendr_textDesc'>
          <p>{desc}</p>
        </div>
        <div className='trendr_buttons'>
          <Button text={leftBtnTxt} link={leftBtnLink} />
          <Button text={rightBtnTxt} link={rightBtnLink} />
        </div>
      </div>
    </div>
  );
};

export default Trendr;
