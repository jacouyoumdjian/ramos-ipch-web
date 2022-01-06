import React, { Component } from 'react';
import { useState } from "react";
import '../../css/App.css';
import '../../css/historial.css';
import { CButton } from '@coreui/react';


class S2_2020 extends Component {
    render() {
        return (
            <div className='view-container'>
                <br />
                <br />
                <br />
                <div className='center-content'>
                    <h2 className='view-title'>Semestre 2° - 2020</h2>
                    <br />
                </div>
                <div className='view-content-template'>
                    <div className='historial-text-div'>
                        <p className='normal-text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <br /><br />

                    <div class="ramos-dropdown">
                        <CButton color="primary" variant="outline">Primary</CButton>
                        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        <DropdownButton
                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton> */}
                    </div>

                </div>
            </div>
        );
    }
}

export default S2_2020;