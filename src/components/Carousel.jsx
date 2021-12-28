import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div className='carousel-container'>
                <img src={require('../img/p5.jpeg')} alt="Ramos IPCh" className='center' />
            </div>
        );
    }
}

export default Carousel;