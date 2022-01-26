import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/App.css';
import '../css/historial.css';

class Historial extends Component {
    render() {
        return (
            <div className='view-container'>
                <br />
                <br />
                <br />
                <div className='center-content'>
                    <h2 className='view-title'>Historial Ramos Sello IPCh</h2>
                    <br />
                    <br />
                    <div className='view-content-template'>
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
}

export default Historial;