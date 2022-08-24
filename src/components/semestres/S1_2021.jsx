import React from 'react';
import '../../css/App.css';
import '../../css/historial.css';
import '../../css/home.css';
import Collapse from '../features/Collapse';


const S1_2021 = () => {

    const dataRamosS1_2021 = [
                        ['Diseño de Elementos de Máquinas - ICM2333', 'Ingeniería Mecánica y Metalúrgica.', 'Diego Celentano.', 'Isa Oyarzo.', 
                        'El proyecto semestral del curso incorporó como temática principal problemáticas reales de la Fundación Corpaliv. \
                        Los estudiantes debieron abordar los desafíos de la fundación desarrollando soluciones orientadas a acoger, orientar y acompañar a niños, \
                        niñas y jóvenes con discapacidad múltiple y a sus familias.', '44.'],
                        ['Diseño en Ingeniería Biomédica - IBM2122', 'Instituto de Ingeniería Biológica y Médica.', 'Vicente Parot.', 'Sin ayudante.', 
                        'Curso parcialmente Sello IPCh. Este curso capstone trabajó un proyecto brindado por iniciativa IPCh, \
                        relacionado a enfermedad fibromialgia.', '6 estudiantes en proyecto IPCh.'],
                        ['Gestión de Operaciones - ICS3213', 'Ingeniería Industrial y de Sistemas.', 'Alejandro MacCawley.', 'Eduards Triviño.', 
                        'Se realizaron tareas a lo largo del semestre que contextualizaban los contenidos del curso en distintos \
                        desafíos reales de la fundación TECHO.', '331.'],
                        ['Ingeniería de Construcción - ICC2304', 'Ingeniería y Gestión de la Construcción.', 'Manuel Carpio.', 'Isa Oyarzo.', 
                        'El proyecto semestral del curso consistió en que los estudiantes desarrollaran la construcción a nivel \
                        de planos de proyectos del MINVU de viviendas sociales. Además, se realizaron charlas en las que se tuvieron a expertos en temáticas relacionadas al \
                        a la construcción de vivienda social y el servicio público.', '69.'],
                        ['Introducción a la Economía - ICS1513', 'Ingeniería Industrial y de Sistemas.', 'Cristobal Munoz y Emil Namur.', 
                        'Joaquín Terreros.', 'El proyecto semestral se contextualizó en la aplicación de la economía en Políticas Públicas. \
                        Además, se realizaron ayudantías con ejercicios relacionados a distintos desafíos ingenieriles abordables desde los \
                        contenidos del curso.', '109.'],
                        ['Investigación, Innovación y Emprendimiento - ING2030', 'Subdirección de Innovación.', 'Loreto Acevedo, Alfonso Cruz, \
                        Constance Fleet, Michael Leatherbee y Patricio Lillo.', 'Isa Oyarzo.', 
                        'La temática general del curso con la que los estudiantes deben realizar sus proyectos de innovación fue una \
                        relacionado a la sustentabilidad: Energías Limpias. Además, para las distintas plenarias se tuvieron charlistas \
                        con expertos en temáticas relacionadas al servicio público, emprendimiento social y el mismo tema del curso.', 
                        '518.'],
                        ['Mecánica de Fluidos - ICH1104', 'Ingeniería Hidráulica y Ambiental.', 'Cristián Escauriaza, \
                        Wernher Brevis y Karina Soto.', 'Javiera Boada e Isa Oyarzo.', 
                        'Se realizaron charlas en las que se tuvieron a expertos en temáticas relacionadas al \
                        riesgo con eventos catastróficos, hidrometeorología y agua potable. Además, se realizaron \
                        ayudantías en las que se desarrollaron ejercicios contextualizados en un problema real de \
                        gran impacto a personas, sociedad y/o el ecosistema en su conjunto.', '518.'],
                        ['Optimización - ICS1113', 'Ingeniería Industrial y de Sistemas.', 'Gustavo Angulo.', 'Martín Cadagan.', 
                        'En el proyecto semestral del curso los estudiantes trabajaron con desafíos reales relacionados a las \
                        áreas de urgencias y gestión de UC Christus. Asimismo, se invitaron a charlistas que entregaron su \
                        testimonio sobre cómo aplicar la optimización en un caso real de gran impacto a personas.', '645.'], 
                        ['Recursos y Exploración Geológica - ICE2640', 'Ingeniería Estructural y Geotécnica.', 'Carlos Marquardt.', 'Isa Oyarzo.', 
                        'Se efectuaron dos salidas a terreno en una minera local de Santiago en la que se realizó un trabajo \
                        de exploración geológica y se entregó el material de estudio a la comunidad cercana a la minera. \
                        Además, se realizaron charlas en las que se tuvieron a expertos en minería sustentable.', '6.']]

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
                    <div className='home-data-template'>
                        <div className='home-data'>
                            <div className='home-data-container1'>
                                <h1 className='home-data-text'>700</h1>
                            </div>
                            <div className='home-data-container2'>
                                <p className='normal-text'>Estudiantes</p>
                            </div>
                        </div>
                        <div className='home-data'>
                            <div className='home-data-container1'>
                                <h1 className='home-data-text'>9</h1>
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
                    </div>
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