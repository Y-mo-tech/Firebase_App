import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Signup from './signup'
import Login from './login'
import GifSearch from './gif';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/search' element={<GifSearch/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
