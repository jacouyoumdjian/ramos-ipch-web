import React from 'react';
import '../css/App.css';

const AppBackground = () => {

    return (
        <div className='background-div'>
            <img src={require('../img/feed_img.png')} alt="Ramos Sello IPCh" className='view-img'/>
        </div>
    );
}

export default AppBackground;