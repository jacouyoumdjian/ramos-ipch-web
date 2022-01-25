import React, { useState } from 'react';
import '../../css/App.css';

export default function Collapse({ collapsed, children }) {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
  
    return (
      <div className='collapse-container'>
        <div className='collapse-text'>
          <h3>{children[0]}</h3>
        </div>
        <div className='collapse-btn-container'>
          <button
            className="collapse-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? 
            <img src={require('../../img/less.png')} alt="Ramos Sello IPCh" className='icon-btn' /> : 
            <img src={require('../../img/plus.png')} alt="Ramos Sello IPCh" className='icon-btn' />}
          </button>
        </div>
        <div
          className={`collapse-content ${isCollapsed ? 'expanded' : 'collapsed'}`}
          aria-expanded={isCollapsed}
        >
          {children.slice(1)}
        </div>
      </div>
    );
 };