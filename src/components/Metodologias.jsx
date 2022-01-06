import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/metodologias.css';

class Metodologias extends Component {
    render() {
        return (
            <div className='view-container'>
                <br />
                <br />
                <br />
                <div className='center-content'>
                    <h2 className='view-title'>Implementación del Sello IPCh</h2>
                    <br />
                    <div className='view-content-template'>
                        <div className='metodologias-text-div'>
                            <p className='normal-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <br /><br />
                        </div>
                        <div className='metod-container'>
                            <div class="metod-div">
                                <img src={require('../img/ayudantias.png')} alt="Ramos Sello IPCh" className='metod-img' />
                                <div class="metod-text">
                                    <br />
                                    <h5 className='cards-text'><Link className="link" to="/ayudantias">Ayudantías</Link></h5>
                                </div>
                            </div>
                            <div class="metod-div">
                                <img src={require('../img/catedra.png')} alt="Ramos Sello IPCh" className='metod-img' />
                                <div class="metod-text">
                                    <br />
                                    <h5 className='cards-text'><Link className="link" to="/ayudantias">Cátedra</Link></h5>
                                </div>
                            </div>
                            <div class="metod-div">
                                <img src={require('../img/proyectos.png')} alt="Ramos Sello IPCh" className='metod-img' />
                                <div class="metod-text">
                                    <br />
                                    <h5 className='cards-text'><Link className="link" to="/ayudantias">Proyectos</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className='metod-container'>
                            <div class="metod-div">
                                <img src={require('../img/salidas.png')} alt="Ramos Sello IPCh" className='metod-img' />
                                <div class="metod-text">
                                    <br />
                                    <h5 className='cards-text'><Link className="link" to="/ayudantias">Salidas a Terreno</Link></h5>
                                </div>
                            </div>
                            <div class="metod-div">
                                <img src={require('../img/tareas.png')} alt="Ramos Sello IPCh" className='metod-img' />
                                <div class="metod-text">
                                    <br />
                                    <h5 className='cards-text'><Link className="link" to="/ayudantias">Tareas</Link></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
            
        );
    }
}

export default Metodologias;