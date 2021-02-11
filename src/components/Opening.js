import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import List from './List';
import LilHeader from './LilHeader';
import './Opening.css';

// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Opening = ({ backgroundImg }) => {
  return (
    <div
      className='opening'
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div className='left_container'>
        <div className='list_header'>
          <LilHeader text='FRONT-END' />
        </div>
        <div className='frontend_list'>
          <List text='HTML5' />
          <List text='CSS3' />
          <List text='JavaScript (ES6)' />
          <List text='Bootstrap' />
          <List text='jQuery' />
          <List text='AJAX' />
        </div>
        <div className='list_header'>
          <LilHeader text='BACK-END' />
        </div>
        <div className='backend_list'>
          <List text='HTML5' />
          <List text='CSS3' />
          <List text='JavaScript (ES6)' />
          <List text='Bootstrap' />
          <List text='jQuery' />
          <List text='AJAX' />
        </div>
        <div className='list_header'>
        <LilHeader text='DEV TECH' />
        </div>    
        <div className='tech_list'>
          <List text='HTML5' />
          <List text='CSS3' />
          <List text='JavaScript (ES6)' />
          <List text='Bootstrap' />
          <List text='jQuery' />
          <List text='AJAX' />
        </div>
      </div>
      <div className='opening_container'>
        <div className='opening_text'>
          <p>Welcome to my online portfolio!</p>
          <div className='opening_textDesc'>
            <p>
              I'm Desmond, a full stack web developer certified through
              University of Texas at Austin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opening;
