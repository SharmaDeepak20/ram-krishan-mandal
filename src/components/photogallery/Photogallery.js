import React from 'react';
import './Photogallery.css';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
import image9 from '../images/image9.jpeg';

const PhotoGallery = () => {

    return (
        <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image9} target="_blank">
                <img src={image9} alt="Lights" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image2} target="_blank">
                <img src={image2} alt="Nature" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image3} target="_blank">
                <img src={image3} alt="Fjords" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image4} target="_blank">
                <img src={image4} alt="Nature" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image5} target="_blank">
                <img src={image5} alt="Lights" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image6} target="_blank">
                <img src={image6} alt="Nature" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image7} target="_blank">
                <img src={image7} alt="Fjords" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="thumbnail">
              <a href={image8} target="_blank">
                <img src={image8} alt="Nature" style={{width:"100%"}}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PhotoGallery;