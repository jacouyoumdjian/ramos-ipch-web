import React, { Component } from 'react';
import '../css/App.css';
import '../css/descripcion.css';

class Descripcion extends Component {
    render() {
        return (
            <div className='view-container'>
                <br />
                <br />
                <br />
                <div className='view-title-container'>
                    <h2 className='view-title'>¿Qué son los Ramos Sello IPCh?</h2>
                    <br />
                    <br />
                    <div className='view-content'>
                        <div className='description-text-div'>
                            <p className='normal-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <br />
                            <br />
                            <h4 className='ramos-text'>¿Cómo nacen los Ramos Sello IPCh?</h4>
                            <p className='normal-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <br />
                            <br />
                            <h4 className='ramos-text'>Nuestros pilares</h4>
                            <p className='normal-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <br />
                            <img src={require('../img/pilares.png')} alt="Ramos Sello IPCh" className='view-img' />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </div>
        );
    }
}

export default Descripcion;