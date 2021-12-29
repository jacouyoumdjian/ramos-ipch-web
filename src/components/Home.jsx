import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
             <div className='home-container'>
                <br />
                <br />
                <br />
                <div className='view-title-container'>
                    <h2 className='view-title'>Iniciativa Ramos Sello IPCh</h2>
                </div>
                <br />
                <div className='home-items-white'>
                    <div className='home-img-div'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='home-img' />
                    </div>

                    <div className='home-text-div'>
                        <h4 className='ramos-text'>¿Qué son los Ramos Sello IPCh?</h4>
                        <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">Conocer más ...</button>
                    </div>
                </div>
                <br />
                <div className='home-items-blue'>
                    <div className='home-img-div'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='home-img' />
                    </div>

                    <div className='home-text-div'>
                        <h4 className='ramos-text-white'>Historial de Ramos Sello IPCh</h4>
                        <p className='normal-text-white'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">Conocer más ...</button>
                    </div>
                </div>
                <br />
                <div className='home-items-white'>
                    <div className='home-img-div'>
                        <img src={require('../img/test_logo.png')} alt="Ramos Sello IPCh" className='home-img' />
                    </div>

                    <div className='home-text-div'>
                        <h4 className='ramos-text'>Metodologías Implementadas</h4>
                        <p className='normal-text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                        five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        <br />
                        </p>
                        <button type="button" class="btn btn-warning">Conocer más ...</button>
                    </div>
                </div>






                <br />
                <br />
                <br />
             </div>
        );
    }
}

export default Home;