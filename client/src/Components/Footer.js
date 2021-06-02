import React from "react";
import Cincinnati from "../img/footer-img/Cincinnati_logo.jpg";
import CBell from "../img/footer-img/CincinnatiBell-logo.png";
import FifthThird from "../img/footer-img/fifth_third_bank.jpg";
import Macy from "../img/footer-img/Macy-logo.jpg";
import PandG from "../img/footer-img/procter-gamble-co-logo.png";
import UC from "../img/footer-img/uc.png";
import Kao from "../img/footer-img/Kao-corp-logo.png";
import CincinnatiRed from "../img/footer-img/cincinnatiRed.jpg";
import cincyZoo from "../img/footer-img/cincyZoo.png";
import Skylinechili from "../img/footer-img/skylineChili.jpg";


const Footer = () => (
    <div className="container">
       <div className="container" id="sponsors">
           <img alt='' src= { Cincinnati } /> 
           <img alt='' src= { CBell } /> 
           <img alt='' src= { FifthThird } /> 
           <img alt='' src= { Macy } />  
           <img alt='' src= { PandG } /> 
           <img alt='' src= { UC } /> 
           <img alt='' src= { Kao } /> 
           <img alt='' src= { CincinnatiRed } /> 
           <img alt='' src= { cincyZoo } />
           <img alt='' src= { Skylinechili } />

      
        </div>

    
       {   <div className="container" id="creators">
        <p>Lauren Moore</p>
        <p>Mona Jira</p>
        <p>Marquis Jarman</p>
        <p>We devoted our times and hearts to create the content of our beloved city.
         Hope you guys find it is useful infomation when you travel in our hometown. Let us know</p>

            



        </div>
       }
    </div>
  );
  


export default Footer;
