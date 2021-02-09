import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import './Item.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({
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
      className='item'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='item_container'>
      <img className='img' src={img} alt=' '/>
        <div className='item_text'>
        
          <p>{title}</p>
          <div className='item_textDesc'>
            <p>{desc}</p>
            </div>
            <div className='item_buttons'>
            <Button text={leftBtnTxt} link={leftBtnLink} />
            <Button text={rightBtnTxt} link={rightBtnLink} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
