import React from 'react';
import '../../css/App.css';
import '../../css/historial.css';
import Collapse from '../features/Collapse';


const S2_2021 = () => {

    const dataRamosS2_2021 = [
                        ['Diseño en Ingeniería Biomédica - IBM2123', 'Instituto de Ingeniería Biológica y Médica.', 'Vicente Parot.', 'Sin ayudante.', 
                        'Curso parcialmente Sello IPCh. Este curso capstone trabajó un proyecto brindado por iniciativa IPCh, \
                        relacionado a enfermedad fibromialgia.', '6 estudiantes en proyecto IPCh.'],
                        ['Introducción a la Economía - ICS1513', 'Ingeniería Industrial y de Sistemas.', 'Cristóbal Muñoz, \
                        Emil Namur, Manuel Perez y Juan Sepúlveda.', 
                        'Pedro Becker, Catalina Bermedo y Vicente Durandeu.', 
                        'El proyecto semestral se contextualizó en la investigación y aplicación de la economía en Políticas Públicas. \
                        Además, se realizó un fuerte seguimiento del trabajo de los estudiantes de parte del cuerpo de ayudantes por medio de \
                        ayudantías y foros de discusión, instancias en las que los estudiantes reforzaban los conocimientos \
                        acerca de políticas públicas.', '528.'],
                        ['Investigación, Innovación y Emprendimiento - ING2030', 'Subdirección de Innovación.', 'Alfonso Cruz, David Fernández, Felix Halcartegaray, \
                        Isabel Hilliger, Francisco Pizarro, Claudia Prieto, Patricio Lillo y Álvaro Rosello.', 'Isa Oyarzo.', 
                        'La temática general del curso con la que los estudiantes deben realizar sus proyectos de innovación fue una \
                        relacionado a la tecnología del 5G para el beneficio de las personas. Además, para las distintas plenarias se tuvieron charlistas \
                        con expertos en temáticas relacionadas al servicio público, emprendimiento social y el mismo tema del curso.', '451.'], 
                        ['Mecánica de Fluidos - ICH1104', 'Ingeniería Hidráulica y Ambiental.', 'Wernher Brevis, Rodrigo Cienfuegos y Karina Soto.', 'Javiera Boada y Fernanda Estrada.', 
                        'Se realizaron ayudantías en las que se desarrollaron ejercicios contextualizados en un problema real de \
                        gran impacto a personas, sociedad y/o el ecosistema en su conjunto.', '380.'],
                        ['Optimización - ICS1113', 'Ingeniería Industrial y de Sistemas.', 'Raimundo Cuadrado, Jaime González, Mathias Klapp, Sebastián Vásquez y \
                        Felipe Verástegui.', 'Daniel Florea.', 
                        'En el proyecto semestral del curso los estudiantes trabajaron con desafíos reales relacionados a ayudar a planificar decisiones que permitan \
                        incrementar y/o evitar la pérdida de bienestar social. Asimismo, se invitaron a charlistas que entregaron su \
                        testimonio sobre cómo aplicar la optimización en un caso real de gran impacto a personas.', '525.'],
                        ['Proyecto de Diseño Mecánico - ICM2026', 'Ingeniería Mecánica y Metalúrgica.', 'Diego Celentano y Marco Sánchez.', 'Florencia Bianchi y Alberto Castro.', 
                        'El proyecto semestral del curso incorporó como temática principal problemáticas reales de un jardín infantil. \
                        Los estudiantes debieron abordar los desafíos del jardín desarrollando soluciones orientadas a acoger y estimular a niños y \
                        niñas.', '51.'],
                        ['Procesos Superficiales y Peligros Geológicos - ICE2029', 'Ingeniería Estructural y Geotécnica.', 'Carlos Marquardt.', 'Paulina Vergara.', 
                        'El proyecto semestral del curso implicó trabajar directamente con la contraparte TECHO en un análisis geotécnico de los peligros y riesgos \
                        geológicos de una comunidad con la que trabaja la fundación. Los estudiantes debieron realizar salidas a terreno e interactuar con personas de \
                        la comunidad para levantar toda la información necesaria para el entregable final.', '7.'],
                        ['Sustentabilidad en la Construcción - ICC3464', 'Ingeniería y Gestión de la Construcción.', 'Manuel Carpio.', 'Sin ayudante.', 
                        'Se invitaron a charlistas que entregaron su testimonio sobre cómo aplicar la sustentabilidad \
                        en la construcción en un caso real de gran impacto a personas.', '46.'], 
                        ['Taller de Evaluación, Tratamiento y Remediación Ambiental - ICH2394', 'Ingeniería Hidráulica y Ambiental.', 
                        'María Molinos.', 'Daniela Madrazo, Angel Perez (contacto Puentes UC).', 
                        'Se colaboró en la comunicación y coordinación con Puentes UC y los estudiantes, para definir el trabajo a realizar con la Municipalidad que \
                        jugaba el rol de contraparte en el proyecto. Se realizó un trabajo con instituciones públicas al acercar la estructura de la postulación a fondos a los \
                        proyectos de los estudiantes, con el fin de facilitar este proceso a la contraparte.', '60.'],]

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <h2 className='view-title'>Semestre 2° - 2021</h2>
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
                        dataRamosS2_2021?.map((item, i) => 
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

export default S2_2021;