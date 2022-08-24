import React from 'react';
import '../css/App.css';
import '../css/proyectos.css';

const Proyectos = () => {

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
                        A continuación, se presentan las distintas áreas de los proyectos disponibles para descargar. 
                        Cabe destacar, que estos son proyectos de cursos revisados por docentes, que involucran el trabajo
                        de los estudiantes junto a una contraparte. Para descargar el material se requiere de iniciar sesión.
                    </p>
                    <br />
                    <div className='proyect-card-template'>
                        <div className='proyect-card-text'>
                            <h4 className='ramos-text'>Título de proyecto 1: Ingeniería Para Chile en Tiempos de Pandemia</h4>
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
                            <h4 className='ramos-text'>Título de proyecto 2: Ingeniería Para Chile en otros Tiempos de Pandemia</h4>
                            <br />
                            <p className='normal-text'>
                                Mecánica de Fluidos
                                <br />
                                Semestre 2° - 2021
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

export default Proyectos;