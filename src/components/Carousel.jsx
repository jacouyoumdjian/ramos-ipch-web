import React from 'react';
import '../css/App.css';

const Carousel = () => {

    return (
        <div className='carousel-div'>
            <img src={require('../img/feed_img.png')} alt="Ramos Sello IPCh" className='view-img'/>
        </div>
    );
}

export default Carousel;