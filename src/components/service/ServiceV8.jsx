import React from 'react';
import SingleServiceV8 from './SingleServiceV8';
import { HashLink as Link } from 'react-router-hash-link';
import ServiceV8Data from '../../jsonData/ServiceV8Data.json'
import serviceTriangle from '/images/shapes/service-triangle.png'
import serviceLine from '/images/shapes/service-line.png'

const ServiceV8 = () => {
    return (
        <>
            <section className="services-seven home-seven rel text-center py-150 rpy-100" style={{ backgroundImage: "url(/images/background/services.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="section-title mb-75">
                                <span className="sub-title">03 Our Services</span>
                                <h2>Our proposition Data Science and Analytics Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {ServiceV8Data.slice(0, 3).map(service =>
                            <div className="col-lg-4 col-sm-6" key={service.id}>
                                <SingleServiceV8 service={service} />
                            </div>
                        )}
                    </div>
                    <div className="more-about-services mt-50">
                        <span>Want to learn More about Our Services?
                            <Link to="/services#" className="read-more">Click here <i className="fas fa-long-arrow-alt-right"></i></Link>
                        </span>
                    </div>
                </div>
                <div className="circle-drop-one"></div>
                <div className="circle-drop-two"></div>
                <div className="service-triangle">
                    <img src={serviceTriangle} alt="Triangle" />
                </div>
                <div className="service-line">
                    <img src={serviceLine} alt="Triangle" />
                </div>
            </section>
        </>
    );
};

export default ServiceV8;