import React from 'react';
import Card from './Card';

import chotulal_ji_kakra from '../images/chotulal_ji_kakra.jpeg';
import mangaram_ji_ramchandani from '../images/mangaram_ji_ramchandani.jpeg';
import saket_ji_kalani from '../images/saket_ji_kalani_2.jpg';
import permeshwar_ji_sharma from '../images/permeshwar_ji_sharma.jpeg';
import premprakash_ji_purohit from '../images/premprakash_ji_purohit.jpeg';
import girdhar_ji_purohit from '../images/girdhar_ji_purohit_new.jpeg';
import suryaprakash_ji_purohit from '../images/suryaprakash_ji_purohit_new.jpeg';
import shri_niwas_ji_kalani from '../images/shri_niwas_ji_kalani.jpeg';

import './Cards.css';


const Cards = () => {
    return (
        <div className="container">
            <h1 style={{ color: "white", margin: "10px" }}><u>कार्यकारिणी</u></h1>
            <br />
            <div className="row">
                <div className="col-sm-3">

                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={chotulal_ji_kakra} className="img-responsive" />
                                <div className="card-caption text">
                                    <span className="h2">श्रीमान छोटूलाल काकड़ा</span>
                                    <p>संरक्षक</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={suryaprakash_ji_purohit} className="img-responsive" />
                                <div className="card-caption text">
                                    <span className="h2">श्रीमान सूर्यप्रकाश पुरोहित</span>
                                    <p>अध्यक्ष</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={permeshwar_ji_sharma} className="img-responsive" />
                                <div className="card-caption  text">
                                    <span className="h2">श्रीमान परमेश्वर शर्मा</span>
                                    <p>उपाध्यक्ष</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={mangaram_ji_ramchandani} className="img-responsive" />
                                <div className="card-caption  text">
                                    <span className="h2">श्रीमान मंघाराम रामचंदानी</span>
                                    <p>सचिव</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-3">
                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={saket_ji_kalani} className="img-responsive" />
                                <div className="card-caption  text">
                                    <span className="h2">श्रीमान साकेत कालानी</span>
                                    <p>सह-सचिव</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">

                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={shri_niwas_ji_kalani} className="img-responsive" />
                                <div className="card-caption text">
                                    <span className="h2">श्रीमान श्रीनिवास कालानी</span>
                                    <p>कोषाध्यक्ष</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">

                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={girdhar_ji_purohit} className="img-responsive" />
                                <div className="card-caption text">
                                    <span className="h2">श्रीमान गिरधर पुरोहित</span>
                                    <p>निर्देशक</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-3">
                    <div className="card card-price">
                        <div className="card-img">
                            <a href="#">
                                <img src={premprakash_ji_purohit} className="img-responsive" />
                                <div className="card-caption text">
                                    <span className="h2">श्रीमान प्रेमप्रकाश पुरोहित</span>
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