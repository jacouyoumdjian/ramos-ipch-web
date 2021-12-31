import React, { Component } from 'react';
import {Navbar, Home, Historial, Carousel, Descripcion, Metodologias, Ayudantias} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useParams, useRouteMatch } from "react-router-dom";
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
              <Route path='/metodologias' element={<Metodologias/>} />
              <Route path='/ayudantias' element={<Ayudantias/>} />
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
