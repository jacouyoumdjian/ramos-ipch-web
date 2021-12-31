import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';

class Navbar extends Component {
    render() {
        return (
            <div className="topnav">
                    <div className='nav-logo'>
                        <div className="link-container">
                            <Link className="link" to="/"><h4 className='ramos-text'>Ramos Sello IPCh</h4></Link>
                        </div>
                    </div>

                    <div className='nav-item'>
                        <div className="link-container">
                            <Link className="link" to="/descripcion">¿Qué son?</Link>
                        </div>
                    </div>

                    <div className='nav-item'>
                        <div className="link-container">
                            <Link className="link" to="/historial">Historial</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        {/* <button className="dropbtn">Metodologías Sello IPCh</button> */}
                        <button className="dropbtn"><Link className="link" to="/metodologias">Metodologías Sello IPCh</Link></button>
                        <div className="dropdown-content">
                            <a href="#"><Link className="link" to="/ayudantias">Ayudantías</Link></a>
                            <a href="#">Cátedra</a>
                            <a href="#">Proyectos</a>
                            <a href="#">Salidas a Terreno</a>
                            <a href="#">Tareas</a>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Navbar;
