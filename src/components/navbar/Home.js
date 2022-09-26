import React from 'react';
import ram_darbaar from '../images/ram_darbaar1.png';
import Slider from '../slider/Slider';
import PhotoGallery from '../photogallery/Photogallery';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider />
            <br/>
            <div className="text-class">
                <h1>श्री राम कृष्ण मंडल, कृष्णगढ शहर</h1>
                <br/>
            </div>
            <PhotoGallery />
        </div>
    );
}

export default Home;