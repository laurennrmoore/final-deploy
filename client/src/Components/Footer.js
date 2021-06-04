import React, { Component } from 'react';
import '../About.css';

import React from "react";
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
const Footer = () => (
   <div className="container">
       <div className="container" id="sponsors">
           <img alt='' src= { Cincinnati } /> 
           <img alt='' src= { CBell } /> 
           <img alt='' src= { FifthThird } /> 
           <img alt='' src= { Kao } />
           <img alt='' src= { Macy } />  
           <img alt='' src= { PandG } /> 
           <img alt='' src= { UC } /> 
           <img alt='' src= { CincinnatiRed } /> 
           <img alt='' src= { cincyZoo } />
           <img alt='' src= { Skylinechili } />

        <h5 id="">CREATORS</h5>

        <p>Lauren Moore <br/>
        <a id="Lauren" href="https://www.linkedin.com/in/lauren-m-a233b321/"><TiSocialLinkedin size="3em"></TiSocialLinkedin></a></p> 

        <p>Marquis Jarman<br/>
        <a id="Marquis" href="https://www.linkedin.com/in/marquis-jarman-9a1113210//"><TiSocialLinkedin size="3em" ></TiSocialLinkedin></a></p> 
        
        <p>Mona Jira<br/>
        <a id="Mona" href="https://www.linkedin.com/in/mona-jiravirotekul-26347768/"><TiSocialLinkedin size="3em" ></TiSocialLinkedin></a></p> 
        
        
        <p id="footer-text">We devoted our times and hearts to create the content of our beloved city.
         Hope you guys find it is useful infomation when you travel in our hometown. 
         Let us know</p>
      
      </div>
       
    </div>
  );
  


export default Footer;
