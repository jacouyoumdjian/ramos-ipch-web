import React, { Component } from 'react';
import { Carousel, Navbar, Home, Descripcion, Historial, S2_2020, Proyectos, Metodologias, Ayudantias, Equipo } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';

class App extends Component {

  render() {
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
              <Route path='/historial' element={<Historial/>} />
              <Route path='/s2-2020' element={<S2_2020/>} />
              <Route path='/proyectos' element={<Proyectos/>} />
              <Route path='/metodologias' element={<Metodologias/>} />
              <Route path='/ayudantias' element={<Ayudantias/>} />
              <Route path='/equipo' element={<Equipo/>} />
            </Routes>
            <br />
            <br />
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
}


export default App;
