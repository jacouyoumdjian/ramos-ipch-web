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
                    <br />
                    <div className='view-content-template'>
                        <div className='proyectos-text-div'>
                            <p className='normal-text'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                                printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Proyectos;