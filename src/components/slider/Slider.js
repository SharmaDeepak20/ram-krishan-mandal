import React from 'react';
import ram_darbaar from '../images/ram_darbaar1.png';
import banner1 from '../images/banner2.png';
import new_banner_3 from '../images/new_banner_3.jpeg';
import new_banner_2 from '../images/new_banner_2.jpeg';

const Slider = () => {

    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>


            <div className="carousel-inner">
                <div className="item active">
                    <img src={new_banner_2} alt="Los Angeles" style={{width:"100%", height:"550px"}} />
                </div>

                <div className="item">
                    <img src={new_banner_3} alt="Chicago" style={{width:"100%", height:"550px"}} />
                </div>

                <div className="item">
                    <img src={new_banner_2} alt="New york" style={{width:"100%", height:"550px"}} />
                </div>
            </div>


            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Slider;