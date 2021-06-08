import React, {Component} from 'react';
import NavBar from './Navbar';
import Footer from './Footer';
import './play.css';

import chilidish from '../img/body-img/chilidish.jpg';
import chiliver from '../img/body-img/chiliver.jpg';
import chilidinner from '../img/body-img/chilidinner.jpg';
import icecreamcups from '../img/body-img/icecreamcups.jpg';
import icecreamtruck from '../img/body-img/icecreamtruck.jpg';
import greatericecream from '../img/body-img/greatericecream.jpg';

import Shopcincyshirts from '../img/body-img/Shopcincyshirts.jpg';
import ShopLaneKate from '../img/body-img/ShopLaneKate.jpg';
import Shopoutlet2 from '../img/body-img/Shopoutlet2.jpg';
import shopping from '../img/body-img/shopping.jpg';

import playFlyer2 from '../img/body-img/playFlyer2.jpg';
import playRedStadium from '../img/body-img/playRedStadium.jpg';
import playriverboat from '../img/body-img/playriverboat.jpg';
import playGhostTour from '../img/body-img/playGhostTour.jpg';
import Playifly from '../img/body-img/Playifly.jpg'



export default class Play extends Component{
  render(){
    return (
        <div className="body-container"> 
          <div className="eat-container">
               <img className="body-img" id="A" alt='' src= { chilidish } />
               <img className="body-img" id="B" alt='' src= { chiliver } />
               <img className="body-img" id="C" alt='' src= { icecreamcups } />
               <img className="body-img" id="D" alt='' src= { icecreamtruck } />
               <img className="body-img" id="E" alt='' src= { greatericecream  } />

          </div>

          <div className="shop-container">
               <img className="body-img" id="F" alt='' src= { Shopcincyshirts } />
               <img className="body-img" id="G" alt='' src= { ShopLaneKate } />
               <img className="body-img" id="H" alt='' src= { Shopoutlet2 } />
               <img className="body-img" id="I" alt='' src= { shopping } />
               <img className="body-img" id="J" alt='' src= { greatericecream } />

          </div>

          <div className="play-container">
               <img className="body-img" id="K" alt='' src= { playFlyer2 } />
               <img className="body-img" id="L" alt='' src= { playRedStadium } />
               <img className="body-img" id="M" alt='' src= { playriverboat } />
               <img className="body-img" id="N" alt='' src= { Playifly } />
               <img className="body-img" id="O" alt='' src= { playGhostTour } />

          </div>

        
        
        </div>


    )}
};


