import React from 'react';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../About.css';
import 'bootstrap/dist/css/bootstrap.css';


import cliff from "../img/About.img/cliff.jpg";
import concert from "../img/About.img/concert.jpg";
import eatout from "../img/About.img/eatout.jpg";
import legShot from "../img/About.img/legShot.jpg";




const About = () => {
    return (
        <div className="about-container">

            <div className="About-images" id="about-img">
              

               <img className="bg-about-img" id="aboutB" alt='' src= { cliff } />
               <img className="bg-about-img" id="aboutF" alt='' src= { legShot } />

            <div className="float-right col-3">
                <img className="bg-about-img" id="aboutC" alt='' src= { concert } />
                <img className="bg-about-img" id="aboutE" alt='' src= { eatout } /> 
            </div>
              
            </div>
            
                <div className="About-bg-text">
                  <h4 className="center" id="aboutTitle">About</h4>
                     <p> We love Cincinnati and want to share the best of our city's offerings with you. We live, work and play here. Our mission is connecting you to the sights, sounds,adventures and events of our city. We want you and your families to enjoy the finest of what Cincinnati has to offer.We’d love to connect with you on social media. Share your experience with us! Join our newsletter community, called Club Cincinnati for discounts, coupons and special offers. Thank you for visiting our city, and we hope you enjoy your visit.</p>
                </div>
                     
        </div>
    )
};
export default About;