import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';

const Navbar = () => {

    return (
        <div className="topnav">
                <div className='nav-logo'>
                    <div className="link-container">
                        <Link className="link" to="/"><h4 className='ramos-text'>Ramos Sello IPCh</h4></Link>
                    </div>
                </div>
                <div className="navbar-item">
                    <button className="dropbtn"><Link className="link" to="/descripcion">¿Qué son?</Link></button>
                </div>
                <div className="navbar-item">
                    <button className="dropbtn"><Link className="link" to="/historial">Historial</Link></button>
                </div>
                <div className="navbar-item">
                    <button className="dropbtn"><Link className="link" to="/proyectos">Proyectos</Link></button>
                </div>
                <div className="navbar-item">
                    <button className="dropbtn"><Link className="link" to="/metodologias">Metodologías Sello IPCh</Link></button>
                    <div className="dropdown-content">
                        <a href="#"><Link className="link" to="/metod-ayudantias">Ayudantías</Link></a>
                        <a href="#"><Link className="link" to="/metod-catedra">Cátedra</Link></a>
                        <a href="#"><Link className="link" to="/metod-proyectos">Proyectos</Link></a>
                        <a href="#"><Link className="link" to="/metod-salidas">Salidas a Terreno</Link></a>
                        <a href="#"><Link className="link" to="/metod-tareas">Tareas</Link></a>
                    </div>
                </div>
                <div className="navbar-item">
                    <button className="dropbtn"><Link className="link" to="/equipo">Equipo</Link></button>
                </div>
        </div>
    );
    
}

export default Navbar;
