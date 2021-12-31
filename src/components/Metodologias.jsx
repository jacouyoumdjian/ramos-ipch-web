import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Metodologias extends Component {
    render() {
        return (
             <div>
                 Aquí están todas las metodologías del sello.
                 <div>
                    <Link className="link" to="/ayudantias">Ayudantías</Link>
                </div>
                <br />
                <br />
                <br />
             </div>
        );
    }
}

export default Metodologias;