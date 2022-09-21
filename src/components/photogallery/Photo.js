import React from 'react';

const Photo = props => {
    return (
        <div className="col-md-3">
            <div className="thumbnail">
                <a href={props.src} target="_blank">
                    <img src={props.src} alt="Lights" style={{ width: "100%" }} />
                </a>
            </div>
        </div>
    );
}

export default Photo;