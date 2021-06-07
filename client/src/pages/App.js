
import React, { Component } from 'react';
import DemoCarousel from '../pages/Carousel';
import Navbar from '../Components/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../index.css";
import '../Carousel.css';
// import ContactForm from './Components/ContactForm'
import Footer from '../Components/Footer';
import About from '../pages/About';
// import Covid from '../Components/Covid'





export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
      {/* <DemoCarousel/> */}
      <Route exact path='/Home' component={ DemoCarousel }/>
      <Route path='/about' component= { About }/>
      {/* <Route path='/Covid' component= { Covid } /> */}
    {/* <Route path='/contact' component={ContactForm}/> */}
      <Footer/>
      </BrowserRouter>
        
      </div>
    )
  }
}
