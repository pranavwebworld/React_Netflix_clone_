import logo from './logo.svg';
import React from 'react'

import './App.css';
import NavBar from './components/Nav-bar/NavBar';
import Banner from './components/Banner/Banner';
import Rowposter from './components/Rowposter/Rowposter';


function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Banner/>
      <Rowposter/>

    </div>
  );
}

export default App;
