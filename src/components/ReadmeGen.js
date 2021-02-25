import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import FloatingText from './FloatingText';
import './ReadmeGen.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ReadmeGen = ({ img, backgroundImg }) => {
  return (
    <div
      className='readme_gen'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='rmg_container'>
        {/* <img className='rmg_img' src={img} alt='Readme Generator' /> */}
      </div>
      <FloatingText
        title='Readme Generator'
        desc='CLI that generates a README file based on user input.'
        leftBtnTxt='CODE'
        leftBtnLink='https://github.com/DesmondAldridge/readme-generator'
        rightBtnTxt='DEMO'
        rightBtnLink='https://drive.google.com/file/d/1QuzsCEA-r8YG5HxdSLXLc8NUn9di7rtY/view'
      />
    </div>
  );
};

export default ReadmeGen;
