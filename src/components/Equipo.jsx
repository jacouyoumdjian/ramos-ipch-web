import React from 'react';
import '../css/App.css';
import '../css/equipo.css';

const Equipo = () => {

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <h2 className='view-title'>Equipo Ramos Sello IPCh</h2>
                <br />
            </div>
            <div className='view-content-template'>
                <div className='team-text-div'>
                    <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <br/><br/>
                    <h4 className='ramos-text'>Iniciativa Estudiantil: Ingeniería Para Chile</h4>
                    <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <br/><br/>
                    <h4 className='ramos-text'>Dirección de Responsabilidad Social de Escuela de Ingeniería UC</h4>
                    <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Equipo;