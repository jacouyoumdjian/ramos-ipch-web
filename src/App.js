import React, { Component } from 'react';
import {Navbar, Home, Historial, Carousel} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useParams, useRouteMatch } from "react-router-dom";
import './css/App.css';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div className='app-feed'>
          <Carousel />
          
          <Navbar />

          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/historial' element={<Historial/>} />
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
      </BrowserRouter>
    );
  }
}


export default App;
