import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import cincynavbarlogo from "../img/footer-img/cincynavbarlogo.jpg";
import '../Components/navigation.css'


const Navbar = () => {
       // const handleClick = e => {
    //   e.preventDefault();
    //   document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
    //   document.getElementById('mainListDiv').classList.toggle('show_list');
    //   $('#mainListDiv').fadeIn();
    // }

   
    return (
        <header>
        <nav className="nav">
            <div className="container">
             
                <a href="/">
                <img className="navbarlogo" alt='' src= { cincynavbarlogo } /> 
                </a>
                <div id="mainListDiv" className="main_list">

                    <ul className="navlinks">
                    <li><NavLink to="/NotHome">Attractions</NavLink></li>
                    <li><NavLink to="/Covid 19">Covid 19</NavLink></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
             </div>
           </nav>
        </header>
    )
};

<Navbar fixed="top" />


export default withRouter(Navbar)