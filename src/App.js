// import React, { useState } from 'react'
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Profile from './components/Profile';
import Hooks from './components/Hooks'
import Forms from './components/Forms';
import Map from './components/Map';
import Style from './components/Style'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Foms from './components/Foms';
import Api from './components/Api';
import Ref from './components/Ref'
import Pure from './components/Pure'

class App extends React.Component {
  render() {
    return (
      <div className="App">
     
     <Pure />

        {/*
        <Router>
                <Link to="/">Home</Link>
             
                <Link to="/about">About</Link>
             
                <Link to="/Foma">Foma</Link>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Foma" element={<Foms />} />
          </Routes>
        </Router>
         function App(){
  const [data, setData]=useState("shoaib")
  function updateData()
  {
    setData("siddiqui")
  }
  return(
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>updateData</button>
    </div>
  )
}
              <Greet name = "Shoaib"  age = "18"/>
              <Greet name = "Moheed" age = "18"/>
              <Greet name = "siddiqui" age = "18"/>
              <Welcome />
               <Hello /> 
               <Profile />
               <Hooks />
                <Map />
                <Forms />
                <Style />
                <Api />
        <Ref />

                */} 
      </div>
    )
  }
}


export default App;
