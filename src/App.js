import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './style/css/index.css';
import Header from './components/Header.js'
import Home from './pages/Home.js';
import Destination from './pages/Destination.js';
import Crew from './pages/Crew.js';
import Technology from './pages/Technology.js';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <main>
        <div className="Container">
      
        <Header />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<Home />}/>
        </Routes>
      
        </div>
      </main>

    </BrowserRouter>
  );
  
}

export default App;
