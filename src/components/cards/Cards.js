import React from 'react';
import Card from './Card';
import image1 from '../images/image1.jpeg';
import './Cards.css';


const Cards = () => {
    return (
        <div class="container">
            <h1 style={{color: "white", margin: "10px"}}><u>कार्यकारिणी</u></h1>
            <br/>
            <div class="row">
                <div class="col-sm-3">

                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption text">
                                    <span class="h2">श्रीमान छोटूलाल काकड़ा</span>
                                    <p>संरक्षक</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption text">
                                    <span class="h2">श्रीमान सूर्यप्रकाश पुरोहित</span>
                                    <p>अध्यक्ष</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption  text">
                                    <span class="h2">श्रीमान परमेश्वर शर्मा</span>
                                    <p>उपाध्यक्ष</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption  text">
                                    <span class="h2">श्रीमान मंघाराम रामचंदानी</span>
                                    <p>सचिव</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-3">
                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption  text">
                                    <span class="h2">श्रीमान साकेत कालानी</span>
                                    <p>सह-सचिव</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">

                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption text">
                                    <span class="h2">श्रीमान श्रीनिवास कालानी</span>
                                    <p>कोषाध्यक्ष</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">

                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption text">
                                    <span class="h2">श्रीमान गिरधर पुरोहित</span>
                                    <p>निर्देशक</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card card-price">
                        <div class="card-img">
                            <a href="#">
                                <img src="http://placeimg.com/640/320/nature/grayscale" class="img-responsive" />
                                <div class="card-caption text">
                                    <span class="h2">श्रीमान प्रेमप्रकाश पुरोहित</span>
                                    <p>सह-निर्देशक</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;