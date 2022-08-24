import React from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/historial.css';

const Historial = () => {

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <h2 className='view-title'>Historial Ramos Sello IPCh</h2>
                <div className='view-content-template'>
                    <div className='historial-text-div'>
                        <br />
                        <p className='normal-text'>
                            El Sello IPCh se encuentra presente en los cursos a partir del segundo semestre del 2020 y actualmente, 
                            se tienen 3 versiones de este. Cabe destacar, que a partir del semestre 2022-1 se encuentra 
                            disponible documentación de los proyectos semestrales.
                        </p>
                        <br />
                    </div>
                    <div className='cards-container'>
                        <div class="card-div">
                            <img src={require('../img/ipch_logo_azul.png')} alt="Ramos Sello IPCh" className='historial-img' />
                            <div class="card-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/s2-2020">Semestre 2° - 2020</Link></h5>
                            </div>
                        </div>
                        <div class="card-div">
                            <img src={require('../img/ipch_logo_azul.png')} alt="Ramos Sello IPCh" className='historial-img' />
                            <div class="card-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/s1-2021">Semestre 1° - 2021</Link></h5>
                            </div>
                        </div>
                        <div class="card-div">
                            <img src={require('../img/ipch_logo_azul.png')} alt="Ramos Sello IPCh" className='historial-img' />
                            <div class="card-text">
                                <br />
                                <h5 className='cards-text'><Link className="link" to="/s2-2021">Semestre 2° - 2021</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Historial;