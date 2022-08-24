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
                    <h4 className='ramos-text'>Dirección de Responsabilidad Social de Escuela de Ingeniería UC</h4>
                    <p className='normal-text'>
                        La Dirección de Responsabilidad Social nace el año 2010 con la misión de fortalecer el rol
                        social de la comunidad de Ingeniería UC, permeando todo el quehacer de la Escuela para formar
                        líderes sociales comprometidos con la inclusión, la equidad y la construcción de una sociedad
                        más justa y sustentable. De esta manera, se favorece la formación profesional y personal con
                        conciencia social, mediante la aplicación de conocimiento en contextos reales diversos.
                    </p>
                    <br/><br/>
                    <h4 className='ramos-text'>Iniciativa Estudiantil: Ingeniería Para Chile</h4>
                    <p className='normal-text'>
                        Ingeniería Para Chile (IPCh) es un proyecto que nace del alumnado de la escuela de Ingeniería UC el 
                        año 2017 en respuesta a resultados de estudios y encuestas que visibilizan la carencia de conexión 
                        existente entre estudiantes y las problemáticas a nivel país. El proyecto pretende llevar a cabo 
                        actividades tanto enmarcadas en el corto plazo para cambios inmediatos, como también modificaciones 
                        estructurales de la malla y la carrera propiamente tal para el mediano y largo plazo. En lo particular, 
                        sus ejes de trabajo son: en los ramos de la Escuela, en las investigaciones de pregrado y un voluntariado.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Equipo;