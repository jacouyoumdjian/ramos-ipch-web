import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Ramos Sello IPCh</span>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">

                        {/* AQUI CAMBIAR LOS LINKS */}
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">¿Que son?</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/historial">Historial</Link>
                            </li>
                        </ul>
                        <div className="dropdown">
                            <button className="dropbtn">Metodologías Sello IPCh</button>
                            <div className="dropdown-content">
                                <a href="#">Ayudantías</a>
                                <a href="#">Cátedra</a>
                                <a href="#">Proyectos</a>
                                <a href="#">Salidas a Terreno</a>
                                <a href="#">Tareas</a>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </nav>
            //  <div classNameName='navbar-container'>
            //     {/* <ul>
            //         <li>
            //             <Link>Home</Link>
            //         </li>
            //     </ul> */}

            //     <a href="#home">¿Qué son?</a>
            //     <a href="#news">Historial</a>
            //      <div className="dropdown">
            //         <button className="dropbtn">Metodologías Sello IPCh</button>
            //         <div className="dropdown-content">
            //             <a href="#">Ayudantías</a>
            //             <a href="#">Cátedra</a>
            //             <a href="#">Proyectos</a>
            //             <a href="#">Salidas a Terreno</a>
            //             <a href="#">Tareas</a>
            //         </div>
            //     </div>
            //  </div>
        );
    }
}

export default Navbar;
