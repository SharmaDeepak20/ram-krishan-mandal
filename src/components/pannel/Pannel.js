import React from 'react';
import './Pannel.css';
import image1 from '../images/image1.jpeg';

const Pannel = () => {
    return (
        <div class="container center-content">
            <div class="row">
                <div class="col-md-3 col-md-offset-1">
                    <div class="panel panel-primary boxed panelzone">
                        <div class="panel-header">
                            <img src={image1} class="img-responsive"style={{ width: "auto", height: "20%" }} />
                        </div>
                        <div class="panel-body">
                            <h1> Some Content in here </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pannel;