import { findAllByTitle } from '@testing-library/react';
import React from 'react';
import List from './List';
import LilHeader from './LilHeader';
import Button from './Button';
import Gif from '../assets/images/scroll-down.gif';
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
          <List text='React.js' />
          <List text='HTML5' />
          <List text='CSS3' />
          <List text='JavaScript' />
          <List text='(ES6+)' />
          <List text='Bootstrap' />
          <List text='jQuery' />
          <List text='AJAX' />
        </div>
        <div className='list_header'>
          <LilHeader text='BACK-END' />
        </div>
        <div className='backend_list'>
          <List text='Node.js' />
          <List text='NPM' />
          <List text='Express' />
          <List text='MongoDB' />
          <List text='MySQL' />
        </div>
        <div className='list_header'>
          <LilHeader text='DEV TECH' />
        </div>
        <div className='tech_list'>
          <List text='Git | GitHub' />
          <List text='VS Code' />
          <List text='Postman' />
          <List text='Heroku' />
          <List text='Oh My Zsh' />
          <List text='Chrome DevTools' />
          <List text='Slack | Discord | Asana' />
        </div>
      </div>
      <div className='opening_container'>
        <div className='opening_text'>
          <p>Welcome to my online portfolio!</p>
          <div className='opening_textDesc'>
            <p>
              I'm Desmond, a full stack web developer certified through
              University of Texas at Austin. Leveraging a 15 year professional
              background in the performing arts, I bring a creative outlook and
              passion for collaboration to every project. I look forward to hearing
              from you!
            </p>
            <div className='contactBtn'>
              <Button
                text='SEND ME AN EMAIL 📨'
                link='mailto:desmondaldridge@gmail.com'
              />
              <Button
                text='OR SCHEDULE A CHAT 📅'
                link='https://calendly.com/desmondaldridge/30min'
              />
            </div>
           
            <p className='instructions'>
              SCROLL DOWN TO VIEW SOME OF MY PROJECTS
            </p>
          </div>   
        </div>
        <img className='imgGif' src={Gif} alt=' ' />       
      </div>
    </div>
  );
};

export default Opening;
