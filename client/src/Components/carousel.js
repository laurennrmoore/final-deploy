import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import CAmuseum from '../img/CAmuseum.webp';
import coney from '../img/coney.jpg'
import Observatory from '../img/Observatory.jpg';
// import Eden from '../img/Eden.jpg';
import FC from '../img/FC.jpg';
import Fireworks from '../img/Fireworks.jpg';
import KI from '../img/KI.jpg'
import Newport from '../img/Newport.jpg';
import Smale from '../img/Smale.jpg';
import UT from '../img/UT.jpg';
import Boathouse from '../img/Boathouse.jpg';
import CAC from '../img/CAC.jpg';
import Skywheel from '../img/Skywheel.jpg';
import Waterlights from '../img/Waterlights.jpg'; 
import Ark from '../img/Ark.jpg';
import Riverboat from '../img/Riverboat.jpg';
import Hardrock from '../img/Hardrock.jpg';
import Eden2 from '../img/Eden2.jpg';



class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img alt='image' src={CAmuseum} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='image' src={coney} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='image' src={Observatory} />
                    <p className="legend">Legend 3</p>
                </div>
                {/* <div>
                    <img alt='image' src= {Eden}/>
                    <p className="legend">Legend 4</p>
                </div> */}
                <div>
                    <img alt='image' src= {FC}/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img alt='image' src= {Fireworks} />
                    <p className="legend">Legend 6</p>
                </div>
                <div>
                    <img alt='image' src= {KI} />
                    <p className="legend">Legend 7</p>
                </div>
                <div>
                    <img alt='image' src= {Newport}/>
                    <p className="legend">Legend 8</p>
                </div>
                <div>
                    <img alt='image' src= {Smale}/>
                    <p className="legend">Legend 9</p>
                </div>
                <div>
                    <img alt='image' src= {UT} />
                    <p className="legend">Legend 10</p>
                </div>
                <div>
                    <img alt='image' src= {Boathouse} />
                    <p className="legend">Legend 11</p>
                </div>
                <div>
                    <img alt='image' src= {CAC}/>
                    <p className="legend">Legend 12</p>
                </div>
                <div>
                    <img alt='image' src= {Skywheel} />
                    <p className="legend">Legend 13</p>
                </div>
                <div>
                    <img alt='image' src= {Waterlights} />
                    <p className="legend">Legend 14</p>
                </div>
                <div>
                    <img alt='image' src= {Ark} />
                    <p className="legend">Legend 15</p>
                </div>
                <div>
                    <img alt='image' src= {Riverboat} />
                    <p className="legend">Legend 16</p>
                </div>
                <div>
                    <img alt='image' src= {Hardrock} />
                    <p className="legend">Legend 16</p>
                </div>
                <div>
                    <img alt='image' src= {Eden2} />
                    <p className="legend">Legend 17</p>
                </div>
            </Carousel>
        );
    }
}

export default DemoCarousel

// Don't forget to include the css in your page

// Using webpack

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
