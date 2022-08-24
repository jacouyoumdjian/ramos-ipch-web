import React from 'react';
import '../css/App.css';
import '../css/descripcion.css';

const Descripcion = () => {

    return (
        <div className='view-container'>
            <br />
            <br />
            <br />
            <div className='center-content'>
                <br />
                <div className='view-content-template'>
                    <div className='description-text-div'>
                        <h4 className='ramos-text'>¿Qué son los Ramos Sello IPCh?</h4>
                        <p className='normal-text'>
                        Son una iniciativa impulsada desde estudiantes y profesores, que se ha concretado por medio de la 
                        Dirección de Responsabilidad Social y el proyecto estudiantil Ingeniería Para Chile (IPCh). Este sello 
                        consiste en entregarle a los ramos de la Escuela de Ingeniería un valor adicional a sus contenidos y 
                        metodologías de evaluación y aprendizaje, a través de un enfoque a una ingeniería para Chile.
                        </p>
                        <br/><br/>
                        <h4 className='ramos-text'>¿Cómo nacen los Ramos Sello IPCh?</h4>
                        <p className='normal-text'>
                        Se tomaron antecedentes del cabildo realizado el 2019 y se concretaron en un trabajo en conjunto de la 
                        Dirección de la Responsabilidad de la Escuela y el proyecto Ingeniería Para Chile, levantar y darle 
                        forma a esta iniciativa. Se realizó un proceso de investigación a partir de entrevistas con distintos 
                        profesores y ayudantes que han desarrollado metodologías (tanto de aprendizaje como de evaluación) 
                        que se alinean con los puntos mencionados anteriormente.
                        </p>
                        <br />
                        <br />
                        <div className='center-content'>
                            <h2 className='ramos-text'>Nuestros pilares</h2>
                        </div>
                        <br />
                        <p className='normal-text'>
                            Estos pilares se construyeron durante el proceso de investigación previo, en base a la información y 
                            percepción de los estudiantes y profesores que participaron del cabildo y entrevistas respectivamente.
                        </p>
                        <br /><br />
                        <img src={require('../img/pilares.png')} alt="Ramos Sello IPCh" className='view-img' />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default Descripcion;