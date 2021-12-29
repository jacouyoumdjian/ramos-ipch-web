import React, { Component } from 'react';
import '../css/App.css';

class Carousel extends Component {
    render() {
        return (
            <div className='carousel-div'>
                <img src={require('../img/feed_img.png')} alt="Ramos Sello IPCh" className='home-img'/>
            </div>
        );
    }
}

export default Carousel;