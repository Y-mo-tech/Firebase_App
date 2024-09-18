import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import Signup from './signup'
import Login from './login'
import GifSearch from './gif';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/signup' element={<Signup/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/search' element={<GifSearch/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
