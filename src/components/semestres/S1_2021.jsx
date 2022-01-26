import React from 'react';
import '../../css/App.css';
import '../../css/historial.css';
import Collapse from '../features/Collapse';


const S1_2021 = () => {

    const dataRamosS1_2021 = [
                        ['Diseño de Elementos de Máquinas - ICM2333', 'Ingeniería Mecánica y Metalúrgica.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'],
                        ['Diseño en Ingeniería Biomédica - IBM2123', 'Instituto de Ingeniería Biológica y Médica.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'],
                        ['Gestión de Operaciones - ICS3213', 'Ingeniería Industrial y de Sistemas.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'],
                        ['Ingeniería de Construcción - ICC2304', 'Ingeniería y Gestión de la Construcción.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'],
                        ['Introducción a la Economía - ICS1513', 'Ingeniería Industrial y de Sistemas.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'],
                        ['Investigación, Innovación y Emprendimiento - ING2030', 'Subdirección de Innovación.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'], 
                        ['Mecánica de Fluidos - ICH1104', 'Ingeniería Hidráulica y Ambiental.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'],
                        ['Optimización - ICS3213', 'Ingeniería Industrial y de Sistemas.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.'], 
                        ['Recursos y Exploración Geológica - ICE2640', 'Ingeniería Estructural y Geotécnica.', 'Profesor 1.', 'Ayudante 1.', 
                        'propuesta 1.', 'número de estudiantes.']]

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <h2 className='view-title'>Semestre 1° - 2021</h2>
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
                        dataRamosS1_2021?.map((item, i) => 
                            <div key={i}>
                                <Collapse>
                                    <h4 className='ramos-text'>{item[0]}</h4>
                                    <ul>
                                        <li><b>Departamento</b>: {item[1]}</li>
                                        <li><b>Profesores</b>: {item[2]}</li>
                                        <li><b>Ayudantes</b>: {item[3]}</li>
                                        <li><b>Propuesta IPCh</b>: {item[4]}</li>
                                        <li><b>Número de estudiantes</b>: {item[5]}</li>
                                    </ul>
                                </Collapse>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
    
}

export default S1_2021;