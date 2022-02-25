import React from 'react';
import '../../css/App.css';
import '../../css/historial.css';
import Collapse from '../features/Collapse';


const S2_2020 = () => {

    const dataRamosS2_2020 = [
                        ['Gestión de Operaciones en la Construcción - ICC3244', 'Ingeniería y Gestión de la Construcción.', 'Miguel Mora.', 'Leonardo Caamaño.', 'Se invitaron charlistas que entregaron su testimonio \
                        sobre cómo aplicar la optimización en la construcción en un caso real de gran impacto a las personas. Se realizaron actividades en clase en que durante los \
                        primeros 30 minutos se daba un tiempo para investigar acerca de un tema que proponía el ayudante \
                        (atingente a los pilares del sello), y luego este se discutía entre los estudiantes. \
                        Se les entregó lecturas a los estudiantes para que complementarán su formación en el curso, y fueran capaces de ver la aplicación \
                        de los contenidos en casos reales. Se realizó una interrogación que evaluó los conocimientos y \
                        competencias de los estudiantes, contextualizada en un caso real.', '38.'],
                        ['Gestión de Recursos Hídricos - ICH3710', 'Ingeniería Hidráulica y Ambiental.', 'Sebastián Vicuña.', 'Vicente Jander.', 
                        'En las tareas se incorporó una pregunta de investigación bibliográfica acerca de un caso real \
                        que se vinculara con la aplicación de los contenidos del curso, y fomentase la reflexión personal \
                        del estudiante. En las ayudantías se realizaron ejercicios contextualizados en un problema real de gran impacto a personas, \
                        sociedad y/o el ecosistema en su conjunto. Se destinaba una sección de la cátedra para tener discusiones abiertas sobre \
                        abiertamente las respuestas de cada unos de los estudiantes a la pregunta de investigación bibliográfica.',
                        '30.'],
                        ['Mecánica de Fluidos - ICH1104', 'Ingeniería Hidráulica y Ambiental.', 'Cristián Escauriaza, Wernher Brevis, Rodrigo Cienfuegos.', 'Ayudantes: Camila Chauan, \
                        Ismael Mestre.', 'En el proyecto semestral se generó un contenido pedagógico a partir de los contenidos del curso para ser \
                        entregado a instituciones de educación secundaria. En las ayudantías se realizaron ejercicios contextualizados en un problema real de \
                        gran impacto a personas, sociedad y/o el ecosistema en su conjunto.', '577.'],
                        ['Optimización - ICS1113', 'Ingeniería Industrial y de Sistemas.', 'Gustavo Angulo.', 'Martin Cadagan, Camila Toro.', 'En el proyecto semestral se incorporaron \
                        como temáticas problemáticas reales de optimización de la Municipalidad de Las Condes. En las ayudantías transversales se realizaron ejercicios \
                        contextualizados en un problema real de gran impacto a personas, sociedad y/o el ecosistema en su conjunto. \
                        Se invitaron a charlistas que entregaron su testimonio sobre cómo aplicar la optimización en un caso real de gran impacto a personas.',
                        '586.'],
                        ['Sustentabilidad en la Construcción - ICC3464', 'Ingeniería y Gestión de la Construcción.', 'Manuel Carpio.', 'Leonardo Caamaño.', 
                        'Se realizaron distintos controles acerca de las lecturas complementarias y casos reales relacionados \
                        a los contenidos del curso que fomentaban el pensamiento crítico en los estudiantes. Se entregaron lecturas a \
                        los estudiantes para complementar su formación en el curso, y apreciaran la aplicación de los contenidos \
                        en casos reales. Se invitaron a charlistas que entregaron su testimonio sobre cómo aplicar la sustentabilidad \
                        en la construcción en un caso real de gran impacto a personas.', '37.'],
                        ['Taller de Evaluación, Tratamiento y Remediación Ambiental - ICH2394', 'Ingeniería Hidráulica y Ambiental.', 'María Molinos.', 
                        'Daniela Madrazo, Angel Perez (contacto Puentes UC).', 'Se colaboró en la comunicación y coordinación con Puentes UC \
                        y los estudiantes, para definir el trabajo a realizar con la contraparte del semestre: Municipalidad de Frutillar.\
                        Se realizó un trabajo con instituciones públicas al acercar la estructura de la postulación a fondos a los proyectos de los \
                        estudiantes, con el fin de facilitar este proceso a la contraparte.', '75.']]

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <h2 className='view-title'>Semestre 2° - 2020 (Piloto)</h2>
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
                        dataRamosS2_2020?.map((item, i) => 
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

export default S2_2020;