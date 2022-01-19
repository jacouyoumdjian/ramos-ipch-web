import React, { useState } from 'react';
import '../../css/App.css';

export default function Collapse({ collapsed, children }) {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
  
    return (
      <div className='collapse-container'>
        <div className='collapse-text'>
          <h3>Ramo 1</h3>
        </div>
        <div className='collapse-btn-container'>
          <button
            className="collapse-button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? 'Mostrar más' : 'Mostrar menos'}
          </button>
        </div>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          {children}
        </div>
      </div>
    );
 };