import React, { Component } from 'react';
import './Footer.css';

import Cincinnati from "../img/footer-img/KrogerLogo.png";
import CBell from "../img/footer-img/CincinnatiBell-logo.png";
import FifthThird from "../img/footer-img/fifththirdbanklogo.png";
import Kao from "../img/footer-img/Kao-corp-logo.png";
import PandG from "../img/footer-img/PG.png";
import UC from "../img/footer-img/ucwobg.jpg";
import Macy from "../img/footer-img/Macy-logo.jpg";
import CincinnatiRed from "../img/footer-img/cincinRed.jpg";
import cincyZoo from "../img/footer-img/cincyZoo.png";
import Skylinechili from "../img/footer-img/skyline_logo.png";
// import linkedin from "../img/footer-img/linkedin-log.png";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { TiSocialLinkedin } from "react-icons/ti";
import { MdFavoritehearts } from "react-icons/md";
const Footer = () => (
   <div className="footer-container">
   <div className="container" id="sponsor-container">
           <img className="sponsor-logo" alt='' src= { Cincinnati } /> 
           <img className="sponsor-logo" alt='' src= { CBell } /> 
           <img className="sponsor-logo" alt='' src= { FifthThird } /> 
           <img className="sponsor-logo" alt='' src= { Kao } />
           <img className="sponsor-logo" alt='' src= { Macy } />  
           <img className="sponsor-logo" alt='' src= { PandG } /> 
           <img className="sponsor-logo" alt='' src= { UC } /> 
           <img className="sponsor-logo" alt='' src= { CincinnatiRed } /> 
           <img className="sponsor-logo" alt='' src= { cincyZoo } />
           <img className="sponsor-logo" alt='' src= { Skylinechili } />
       
</div>
        <h2 id="creators">CREATORS</h2>
    <div className="grid-container">
      <div className='name1'>
            <h4>Lauren Moore </h4>
            <p><a id="Lauren" href="https://www.linkedin.com/in/lauren-m-a233b321/"><TiSocialLinkedin color="blue" size="3em"></TiSocialLinkedin></a></p> 
      </div> 
      
      <div className='name2'>
            <h4>Marquis Jarman</h4>
            <p><a id="Marquis" href="https://www.linkedin.com/in/marquis-jarman-9a1113210//"><TiSocialLinkedin color="blue" size="3em" ></TiSocialLinkedin></a></p> 
      </div>  

      <div className='name3'>     
            <h4>Mona Jira</h4>
            <p><a id="Mona" href="https://www.linkedin.com/in/mona-jiravirotekul-26347768/"><TiSocialLinkedin color="blue" size="3em" ></TiSocialLinkedin></a></p> 
    </div>
      </div> 
            <p id="footer-text">We devoted our times and <a href="MdFavoritehearts"></a>heart to create the content of our beloved city.
             Hope you guys find it is useful infomation when you travel in our hometown. 
             Let us know. </p>
      
     
      </div>
  
  );
  


export default Footer;
