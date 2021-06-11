import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Play from '../Components/Play';

import AdiscoveredPlantText from '../img/carousel-img/AdiscoveredPlantText.jpg';
import Bconey from '../img/carousel-img/Bconey.jpg';
import Ccincinnatioh from '../img/carousel-img/Ccincinnatioh.jpg';
import DfountainSquare from '../img/carousel-img/DfountainSquare.jpg';
import ESkywheel  from '../img/carousel-img/ESkywheel.jpg';
import FShopKwmall from '../img/carousel-img/FShopkwmall.jpg';
import Gbigcincy from '../img/carousel-img/Gbigcincy.jpg';
import HeatAbigailStreet from '../img/carousel-img/HeatAbigailStreet.png';
import IEden2 from '../img/carousel-img/IEden2.jpg';
import JLion from '../img/carousel-img/JLion.jpg';
import KSkydiving from '../img/carousel-img/KSkydiving.jpg';


import AOS from 'aos';
import 'aos/dist/aos.css';

class CarouselNew extends Component {
    componentDidMount() {
        // or simply just AOS.init();
        AOS.init({
          // initialise with other settings
          duration : 3000
        });
      }

    render() {
        return (
            
          <div>
          <Carousel data-aos="fade-right">

            <div>
                <img alt='' src= { AdiscoveredPlantText } />
                <p className="legendA"></p>
            </div>
      
            <div>
                <img alt='image' src= { Bconey } />
                <p className="legend"></p>
            </div>


            <div>
                <img alt='image' src= { Ccincinnatioh } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { DfountainSquare } />
                <p className="legend"></p>
            </div>

            

            <div>
                <img alt='image' src= { ESkywheel } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { FShopKwmall } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { Gbigcincy } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { HeatAbigailStreet } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { IEden2 } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { JLion } />
                <p className="legend"></p>
            </div>

            <div>
                <img alt='image' src= { KSkydiving } />
                <p className="legend"></p>
            </div>

            
        
           
             </Carousel>
                 <div data-aos="fade-right"><Play /></div>
        </div>    
        );
    }
}
export default CarouselNew