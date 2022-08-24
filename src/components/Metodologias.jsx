import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/metodologias.css';

const Metodologias = () => {

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
                        Los ramos con sello IPCh buscan acercar problemáticas sociales a los cursos ya existentes en la
                        Escuela de Ingeniería, mediante las distintas instancias metodológicas de aprendizaje y evaluación
                        que tienen. Cabe destacar, que estas metodologías que involucran el Sello se planean y ejecutan 
                        en conjunto con el equipo docente del curso, debido a que es fundamental que se alineen con sus objetivos 
                        para que no se entorpezca el proceso de aprendizaje de los estudiantes.
                        <br /><br />
                        En este apartado, se desglosan todas las instancias académicas de un curso en las que se puede 
                        implementar el Sello IPCh. Estas se dividen en: ayudantías, cátedras, proyectos, salidas a terrenos, 
                        tareas, entre otras. A continuación, se presentan las posibles iniciativas en las que se puede 
                        implementar el Sello, por cada metodología de aprendizaje y evaluación de los cursos.
                        </p>
                        <br /><br />
                    </div>
                    <div className='metod-container'>
                        <div class="metod-div">
                            <img src={require('../img/ayudantias.png')} alt="Ramos Sello IPCh" className='metod-img' />
                            <div class="metod-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/metod-ayudantias">Ayudantías</Link></h5>
                            </div>
                        </div>
                        <div class="metod-div">
                            <img src={require('../img/catedra.png')} alt="Ramos Sello IPCh" className='metod-img' />
                            <div class="metod-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/metod-catedra">Cátedra</Link></h5>
                            </div>
                        </div>
                        <div class="metod-div">
                            <img src={require('../img/proyectos.png')} alt="Ramos Sello IPCh" className='metod-img' />
                            <div class="metod-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/metod-proyectos">Proyectos</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className='metod-container'>
                        <div class="metod-div">
                            <img src={require('../img/salidas.png')} alt="Ramos Sello IPCh" className='metod-img' />
                            <div class="metod-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/metod-salidas">Salidas a Terreno</Link></h5>
                            </div>
                        </div>
                        <div class="metod-div">
                            <img src={require('../img/tareas.png')} alt="Ramos Sello IPCh" className='metod-img' />
                            <div class="metod-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/metod-tareas">Tareas</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Metodologias;