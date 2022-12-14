import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from '../pages/Contant/Contact';
import Favorite from '../pages/Favorite/Favorite';
// import Favorite2 from '../pages/Favorite2/Favorite2';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
// import { useLoadScript } from '@react-google-maps/api';


export const RouterConfig: React.VFC = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='./' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          {/* <Route path='/PortFolio/favorite2' element={<Favorite2 />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
