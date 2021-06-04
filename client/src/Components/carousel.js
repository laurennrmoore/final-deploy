import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import Eden2 from '../img/Eden2.jpg';
import Creationmuseum from '../img/Creationmuseum.jpg';
import CAmuseum from '../img/CAmuseum.webp';
import Ballet from '../img/Ballet.png';
import coney from '../img/coney.jpg'
import Ob2 from '../img/Ob2.jpg';
import Chili from '../img/Chili.jpg';
import FC from '../img/FC.jpg';
import Bigfireworks from '../img/Bigfireworks.jpg';
import KI from '../img/KI.jpg';
import Gorilla from '../img/Gorilla.jpg';
import Newport from '../img/Newport.jpg';
import Smale from '../img/Smale.jpg';
import UT from '../img/UT.jpg';
import Birdmural from '../img/Birdmural.jpg';
import Boathouse from '../img/Boathouse.jpg';
import CAC from '../img/CAC.jpg';
import Skywheel from '../img/Skywheel.jpg';
import Cornhole from '../img/Cornhole.jpg'; 
import Flyingpigrun from '../img/Flyingpigrun.jpg'; 
import Cinmusicfest from '../img/Cinmusicfest.jpg'; 
import Oktoberfest from '../img/Oktoberfest.jpg';
import Ark from '../img/Ark.jpg';
import Riverboat2 from '../img/Riverboat2.jpg';
import Hr from '../img/Hr.jpg';


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
             <div>
                 <img alt='image' src= {Eden2} />
                <p className="legend">Legend 17</p>
                </div>
                <div>
                    <img alt='image' src={Creationmuseum} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='image' src={Ballet} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt='image' src={coney} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt='image' src={Ob2} />
                    <p className="legend">Legend 3</p>
                </div>
                 <div>
                    <img alt='image' src= {Chili}/>
                    <p className="legend">Legend 4</p>
                </div> 
                <div>
                    <img alt='image' src= {FC}/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img alt='image' src= {Bigfireworks}/>
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img alt='image' src= {KI} />
                    <p className="legend">Legend 7</p>
                </div>
                <div>
                    <img alt='image' src= {Gorilla} />
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
                    <img alt='image' src= {Birdmural} />
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
                    <img alt='image' src= {Cornhole} />
                    <p className="legend">Legend 14</p>
                </div>
                <div>
                    <img alt='image' src= {Flyingpigrun} />
                    <p className="legend">Legend 14</p>
                </div>
                <div>
                    <img alt='image' src= {Cinmusicfest} />
                    <p className="legend">Legend 14</p>
                </div>
                <div>
                    <img alt='image' src= {Oktoberfest} />
                    <p className="legend">Legend 16</p>
                </div>
                <div>
                    <img alt='image' src= {Ark} />
                    <p className="legend">Legend 15</p>
                </div>
                <div>
                    <img alt='image' src= {Riverboat2} />
                    <p className="legend">Legend 16</p>
                </div>
              
                <div>
                    <img alt='image' src= {Hr} />
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
