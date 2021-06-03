
import React, { Component } from 'react'
import DemoCarousel from './Components/carousel'
import Navbar from './Components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import './App.css';
import ContactForm from './Components/ContactForm'




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

const App = () => {
  return (
    <div className="App">                 
        <ContactForm />           
    </div>
  );
}

export default App;