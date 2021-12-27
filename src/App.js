import React, { Component } from 'react';
import {Navbar, Home, Historial} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, useParams, useRouteMatch } from "react-router-dom";
import './css/App.css';

class App extends Component {

  render() {
    return(
      <BrowserRouter>
        <div className='app-feed'>
          <h2>Hola mundo ipch</h2>
          <Navbar />

          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/historial' element={<Historial/>} />
          </Routes>

        </div>
      </BrowserRouter>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit Coyu <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
