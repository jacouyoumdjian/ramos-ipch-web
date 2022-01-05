import React, { Component } from 'react';
import '../css/App.css';
import '../css/proyectos.css';

class Proyectos extends Component {
    render() {
        return (
            <div className='view-container'>
                <br />
                <br />
                <br />
                <div className='center-content'>
                    <h2 className='view-title'>Proyectos de los Ramos Sello IPCh</h2>
                </div>
                <br />
                <div className='view-content-template'>
                    <div className='proyect-content'>
                        <p className='normal-text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <br />
                        <div className='proyect-card-template'>
                            <div className='proyect-card-text'>
                                <h4 className='proyects-title'>Título de proyecto 1: Ingeniería Para Chile en Tiempos de Pandemia</h4>
                                <br />
                                <p className='normal-text'>
                                    Optimización
                                    <br />
                                    Semestre 1° - 2021
                                </p>
                                <button type="button" class="btn btn-warning">
                                    Descargar documento
                                </button>
                            </div>
                            <div className='proyect-card-img'>
                                <img src={require('../img/documents.png')} alt="Ramos Sello IPCh" className='view-img' />
                            </div>
                        </div>
                        <br />
                        <div className='proyect-card-template'>
                            <div className='proyect-card-text'>
                                <h4 className='proyects-title'>Título de proyecto 1: Ingeniería Para Chile en Tiempos de Pandemia</h4>
                                <br />
                                <p className='normal-text'>
                                    Optimización
                                    <br />
                                    Semestre 1° - 2021
                                </p>
                                <button type="button" class="btn btn-warning">
                                    Descargar documento
                                </button>
                            </div>
                            <div className='proyect-card-img'>
                                <img src={require('../img/documents.png')} alt="Ramos Sello IPCh" className='view-img' />
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Proyectos;