import './App.css';
import React from 'react';
import NavBar from './components/navbar/NavBar';
import Banner from './components/banner/Banner';
import RowPost from './components/RowPost/RowPost';
import {originals,action } from './urls'


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals}title='Netflix Originals'/>


     <RowPost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
