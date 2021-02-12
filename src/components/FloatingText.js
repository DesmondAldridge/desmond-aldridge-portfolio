import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import './ReadmeGen.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const FloatingText = ({
  title,
  desc,
  leftBtnTxt,
  leftBtnLink,
  rightBtnTxt,
  rightBtnLink,
}) => {
  return (
    <div>
      <div className='rmg_container'>    
        <div className='rmg_text'>
          <p>{title}</p>
          <div className='rmg_textDesc'>
            <p>{desc}</p>
            </div>
            <div className='rmg_buttons'>
            <Button text={leftBtnTxt} link={leftBtnLink} />
            <Button text={rightBtnTxt} link={rightBtnLink} />
            </div>
        </div>
      </div>
      </div>

  );
};

export default FloatingText;