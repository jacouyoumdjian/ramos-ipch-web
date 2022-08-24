import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/home.css';

const Home = () => {

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
                    Son una iniciativa impulsada desde estudiantes y profesores, que se ha concretado por medio de la 
                    Dirección de Responsabilidad Social y el proyecto estudiantil Ingeniería Para Chile (IPCh).
                    Este sello consiste en entregarle a los ramos de la Escuela de Ingeniería un valor adicional a sus 
                    contenidos y metodologías de evaluación y aprendizaje, a través de un enfoque a una ingeniería para Chile.
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
                                <p className='normal-text'>Departamentos e Institutos</p>
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
                    Se tomaron antecedentes del cabildo realizado el 2019 y se concretaron en un trabajo en conjunto de la 
                    Dirección de la Responsabilidad de la Escuela y el proyecto Ingeniería Para Chile, para levantar y darle 
                    forma a esta iniciativa. Se realizó un proceso de investigación a partir de entrevistas con distintos 
                    profesores y ayudantes que han desarrollado metodologías (tanto de aprendizaje como de evaluación) 
                    que se alinean con los puntos mencionados anteriormente.
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
                    ¿Cómo trabajamos? El Sello IPCh se implementa en las distintas instancias académicas que se pueden realizar 
                    en evaluaciones, tareas, proyectos semestrales, charlistas, entre otras. Sin embargo, esta página se podrá 
                    encontrar material principalmente relacionado a los proyectos realizados en los cursos.
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
                    <h4 className='ramos-text-white'>Proyectos Sello IPCh</h4>
                    <p className='normal-text-white'>
                    ¿Qué tipo de proyectos se han realizados? Dentro de los cursos con los que se ha trabajado, se han realizado proyectos
                    semestrales relacionados a la Gestión de Operaciones, Optimización, Ingeniería en Transporte, Mecánica de Fluidos,
                    entre otros. Para obtener más información acerca de los proyectos y sus áreas de trabajo te invitamos a 
                    conocer más.
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

export default Home;