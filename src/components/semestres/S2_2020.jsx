import React, { Component } from 'react';
import { useState } from "react";
import '../../css/App.css';
import '../../css/historial.css';
import Collapse from '../features/Collapse';


const S2_2020 = () => {

    const ramosS2_2020 = [['Optimización', 'Profesores: pedro, juan, diego', 'Ayudantes: maria, juan', 'Propuesta: test propuesta'],
                        ['Mecánica de Fluidos', 'Profesores: pedro, juan, diego', 'Ayudantes: maria, juan', 'Propuesta: test propuesta'],
                        ['Sustentabilidad en la Construcción', 'Profesores: pedro, juan, diego', 'Ayudantes: maria, juan', 'Propuesta: test propuesta']]

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <h2 className='view-title'>Semestre 2° - 2020</h2>
                <br />
            </div>
            <div className='view-content-template'>
                <div className='historial-text-div'>
                    <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <br />
                    {
                        ramosS2_2020?.map((item, i) => 
                            <div key={i}>
                                <Collapse>
                                    <h4 className='ramos-text'>{item[i][0]}</h4>
                                    <ul>
                                        <li>{item[i][1]}</li>
                                        <li>{item[i][2]}</li>
                                        <li>{item[i][3]}</li>
                                    </ul>
                                </Collapse>
                            </div>
                        )}
                    <br />
                </div>
            </div>
        </div>
    );
    
}

export default S2_2020;