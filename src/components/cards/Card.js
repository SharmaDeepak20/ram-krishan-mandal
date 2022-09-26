import React from 'react';

const Card = props => {
    return (
        <div className="card" style={{width: "18rem;"}}>
            <img className="card-img-top" src={props.src} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    );
}

export default Card;