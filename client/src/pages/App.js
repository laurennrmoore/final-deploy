
import React, { Component } from 'react'
import DemoCarousel from './Components/carousel'
import Navbar from '../Components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./index.css";
import './carousel.css'
import ContactForm from './Components/ContactForm'
import Footer from '../Components/Footer'




export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
      <DemoCarousel/>
      {/* <Route exact path='/' component={Home}/> */}
    {/* <Route path='/about' component={About}/> */}
    <Route path='/contact' component={ContactForm}/>
    <Footer/>
      </BrowserRouter>
        
      </div>
    )
  }
}

