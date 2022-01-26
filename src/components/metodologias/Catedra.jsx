import React from 'react';
import '../../css/App.css';

const Catedra = () => {
    return (
        <div className='view-container'>
        <br />
        <br />
        <br />
        <div className='center-content'>
            <h2 className='view-title'>Cátedra</h2>
            <br />
            <br />
            <div className='view-content-template'>
                <div className='metodologias-text-div'>
                    <h4 className='ramos-text'>¿Qué es la cátedra?</h4>
                    <p className='normal-text'>
                        La cátedra es instancias académicas (descripció del pool de ideas) he printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <br/><br/>
                    <h4 className='ramos-text'>Cursos en los que hemos trabajado en la cátedra</h4>
                    <p className='normal-text'>
                        <ul>
                            <li>Optimización | semestre 2 - 2020</li>
                            <li>Sustentabilidad en la Construcción | semestre 2 - 2020</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Catedra;