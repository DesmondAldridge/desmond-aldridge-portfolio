import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import Button2 from './Button2';
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
            <Button2 text={leftBtnTxt} link={leftBtnLink} />
            <Button2 text={rightBtnTxt} link={rightBtnLink} />
            </div>
        </div>
      </div>
      </div>

  );
};

export default FloatingText;