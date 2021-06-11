// import React from 'react';
import React, { Component } from 'react';
import '../Components/covid.css';
import covidflyer from './covidflyer.mp4';




export default class Covid extends Component{
    render(){
    return (
        <div className="container">
        <div><h4 className="center" id="aboutTitle"></h4>
         
        <center>
        <video controls autostart autoPlay src={covidflyer} type="video/mp4" height={300} width={300} />
        </center>

</div>
<p>We are deeply committed to the safety and well-being of our fellow Cincinnatians and guests. In order to stay healthy and keep those around us safe, please practice the prescribed precautions:</p>
<ul className="covid-list">
<li>Wear a mask when you go out in public</li>
<li>Practice social distancing from others by at least 6 feet</li>
<li>Wash your hands often with soap and water for at least 20 seconds</li>
<li>If soap and water are not available, use an alcohol-based hand sanitizer</li>
<li>Avoid touching your eyes, nose, and mouth with unwashed hands</li>
<li>Avoid close contact with people who are sick</li>
<li>Stay home when you are mildly ill</li>
<li>Cover your cough or sneeze with a tissue, then throw the tissue in the trash</li>
<li>Clean and disinfect frequently touched objects and surfaces</li>
<li>Protect vulnerable persons (infants, children, the elderly and the differently abled)</li>
<li>Eliminate handshaking, as it requires close contact</li>
<li>Opt for video meetings or conference calls</li>
<li>Don’t pass devices other personal belongings to others</li>
<li>Make hand sanitizer visibly available</li>
<li>Thank you for your cooperation during this challenging time</li>
</ul> 
</div>

)}
    };



