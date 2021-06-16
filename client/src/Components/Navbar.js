import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './navigation.css';

import '../Components/navigation.css'
import orangeLogofinal from "../img/carousel-img/orangeLogofinal.jpg";

const Navbar = () => {
   
    return (
        <header>
          <nav className="nav">

            <div className="container">
             
                
                <div id="mainListDiv" className="main_list">

                    <ul className="navlinks">
                        <li><NavLink to="/"><img className="orangeLogofinal" id="orangeLogofinal" alt='' src= { orangeLogofinal } /></NavLink></li> 
                        <li><NavLink style={{textDecoration: 'none'}}to="/Attractions" className="nav-titles">Attractions</NavLink></li>
                          <li><NavLink style={{textDecoration: 'none'}}to="/Covid" className="nav-titles">Covid-19</NavLink></li>
                          <li><NavLink style={{textDecoration: 'none'}}to="/About" className="nav-titles">About us</NavLink></li>
                          <li><NavLink style={{textDecoration: 'none'}}to="/contact" className="nav-titles">Contact us</NavLink></li>
                     
                    </ul>

                </div>

             </div>

           </nav>
        </header>
    )
};

<Navbar fixed="top" />

export default withRouter(Navbar)



