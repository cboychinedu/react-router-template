// Importing the necessary modules 
import './App.css';
import React, { Component, Fragment } from 'react'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Users from './Components/Users';

// Creating the app UI class component 
class App extends Component {
  // State 
  state = {} 

  // 
  // checkLogin = () => {
  //   let loginValue = true; 
  //   const result = loginValue ? <Contact /> : <Home />; 

  //   return result; 
  // }

  // Render the App component 
  render() {
    return(
      <Fragment>
        {/* Setting the Routes  */}
        <BrowserRouter> 
          {/* Adding the navbar */}
          <Navbar />

          {/* Setting the Routes configurations */}
          <Routes>
              <Route exact path="/" element={<Home />} /> 
              <Route path="/about" element={<About /> } /> 
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/api/:users" element={<Users/> } /> 
          </Routes>
        </BrowserRouter>
      </Fragment>
    )
  }
}

// Exporting the default App 
export default App;
