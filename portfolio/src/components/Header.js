 import React from 'react'
 import './Header.css'
 import DesLogo from '../assets/des-logo.png'
 
 const Header = () => {
     return (
         <div className='header'>
             <div className="header_logo">
                 <img src={DesLogo} alt="Des Logo"/>
             </div>

             <div className="header_center">
                 <p>Rubber Duck CLI</p>
                 <p>Daily Planner</p>
                 <p>Readme Generator</p>
                 <p>Trendr</p>
             </div>

             <div className="header_right">
                 <p>GitHub</p>
                 <p>Email</p>
             </div>
         </div>
     )
 }
 
 export default Header
 