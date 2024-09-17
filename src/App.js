import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='signup' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
