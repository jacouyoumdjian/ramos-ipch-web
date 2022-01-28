import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/home.css';

class Home extends Component {
    render() {
        return (
             <div className='view-container'>
                <br />
                <br />
                <br />
                <div className='center-content'>
                    <h2 className='view-title'>Iniciativa Ramos Sello IPCh</h2>
                </div>
                <br />
                <br />
                <div className='home-items-white'>
                    <div className='home-img-div-white'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='view-img' />
                    </div>
                    <div className='home-text-div-white'>
                        <h4 className='ramos-text'>¿Qué son los Ramos Sello IPCh?</h4>
                        <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">
                            <Link className="link" to="/descripcion">Conocer más ...</Link>
                        </button>
                    </div>
                </div>
                <br /><br />
                <div className='view-content-template'>
                    <div className='home-center-items'>
                        <div className='home-data-title'>
                            <h4 className='ramos-text'>El Sello IPCh ha impactado en ...</h4>
                        </div>
                        <br />
                        <div className='home-data-template'>
                            <div className='home-data'>
                                <div className='home-data-container1'>
                                    <h1 className='home-data-text'>1500</h1>
                                </div>
                                <div className='home-data-container2'>
                                    <p className='normal-text'>Estudiantes</p>
                                </div>
                            </div>
                            <div className='home-data'>
                                <div className='home-data-container1'>
                                    <h1 className='home-data-text'>15</h1>
                                </div>
                                <div className='home-data-container2'>
                                    <p className='normal-text'>Ramos</p>
                                </div>
                            </div>
                            <div className='home-data'>
                                <div className='home-data-container1'>
                                    <h1 className='home-data-text'>7</h1>
                                </div>
                                <div className='home-data-container2'>
                                    <p className='normal-text'>Departamentos de Ingeniería</p>
                                </div>
                            </div>
                            <div className='home-data'>
                                <div className='home-data-container1'>
                                    <h1 className='home-data-text'>0</h1>
                                </div>
                                <div className='home-data-container2'>
                                    <p className='normal-text'>Documentos descargados</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className='home-items-blue'>
                    <div className='home-text-div-blue'>
                        <h4 className='ramos-text-white'>Historial de Ramos Sello IPCh</h4>
                        <p className='normal-text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">
                            <Link className="link" to="/historial">Conocer más ...</Link>
                        </button>
                    </div>
                    
                    <div className='home-img-div-blue'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='view-img' />
                    </div>
                </div>
                <br />
                <div className='home-items-white'>
                    <div className='home-img-div-white'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='view-img' />
                    </div>

                    <div className='home-text-div-white'>
                        <h4 className='ramos-text'>Metodologías Implementadas</h4>
                        <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">
                            <Link className="link" to="/metodologias">Conocer más ...</Link>
                        </button>
                    </div>
                </div>
                <br /><br />
                <div className='home-items-blue'>
                    <div className='home-text-div-blue'>
                        <h4 className='ramos-text-white'>Proyectos de Ramos Sello IPCh</h4>
                        <p className='normal-text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">
                            <Link className="link" to="/proyectos">Conocer más ...</Link>
                        </button>
                    </div>
                    
                    <div className='home-img-div-blue'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='view-img' />
                    </div>
                </div>
                <br />
                <br />
             </div>
        );
    }
}

export default Home;