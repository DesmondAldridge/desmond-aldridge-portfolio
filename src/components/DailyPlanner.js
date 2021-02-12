import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import Button from './Button';
import './DailyPlanner.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const DailyPlanner = ({
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
      className='dailyplanner'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='dp_container'>
      <img className='dp_img' src={img} alt='Daily Planner'/>
      </div>
      
        <div className='dp_text'>

          <p>{title}</p>
          <div className='dp_textDesc'>
            <p>{desc}</p>
            </div>
            <div className='dp_buttons'>
            <Button text={leftBtnTxt} link={leftBtnLink} />
            <Button text={rightBtnTxt} link={rightBtnLink} />
            </div>
        </div>
      </div>

  );
};

export default DailyPlanner;
