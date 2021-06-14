import React, { Component } from 'react';
// import DemoCarousel from './pages/carouselDontUse';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route} from 'react-router-dom';
import "./index.css";
import './carousel.css';
import ContactForm from './pages/ContactForm';
import Footer from './Components/Footer';
import About from './pages/About';
import Covid from './Components/Covid';
import Attractions from './pages/attractions'
import CarouselNew from './pages/carouselnew';
export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
      {/* <CarouselNew/>      */}
      {/* <Route exact path='/' component= { DemoCarousel } /> */}
      <Route path='/about' component= { About } />
      <Route path='/attractions' component= { Attractions } />
      <Route path='/Covid' component= { Covid } />
      <Route path='/' component= { CarouselNew } />
      <Route path='/contact' component= { ContactForm }/>
      <Footer/>
      </BrowserRouter>
      </div>
    )
  }
}