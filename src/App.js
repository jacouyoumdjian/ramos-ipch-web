import React, { Component } from 'react';
import { Carousel, Navbar, Home, Descripcion, Historial, S2_2020, 
  S1_2021, S2_2021, Proyectos, Metodologias, Ayudantias, Catedra, MetodProyectos, Salidas, Tareas, Equipo } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';

const App = () => {

  return(
    <BrowserRouter>
      <div className='body-container'>
        <div className='app-feed'>
          <div className='carousel-container'>
              <Carousel />
          </div>
          
          <Navbar />

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/descripcion' element={<Descripcion/>} />
            {/* Rutas de  de Historial */}
            <Route path='/historial' element={<Historial/>} />
            <Route path='/s2-2020' element={<S2_2020/>} />
            <Route path='/s1-2021' element={<S1_2021/>} />
            <Route path='/s2-2021' element={<S2_2021/>} />
            <Route path='/proyectos' element={<Proyectos/>} />
            {/* Rutas de  de Metodologías */}
            <Route path='/metodologias' element={<Metodologias/>} />
            <Route path='/metod-ayudantias' element={<Ayudantias/>} />
            <Route path='/metod-catedra' element={<Catedra/>} />
            <Route path='/metod-proyectos' element={<MetodProyectos/>} />
            <Route path='/metod-salidas' element={<Salidas/>} />
            <Route path='/metod-tareas' element={<Tareas/>} />
            <Route path='/equipo' element={<Equipo/>} />
          </Routes>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </BrowserRouter>
  );
  
}


export default App;
