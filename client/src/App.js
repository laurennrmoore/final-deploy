
import React, { Component } from 'react'
import DemoCarousel from './Components/carousel'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Navbar />
      <DemoCarousel/>
      </BrowserRouter>
        
      </div>
    )
  }
}
